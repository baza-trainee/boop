import { cloudinary } from '@/lib/cloudinary'; // your config path
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

type UploadResponse =
  | { success: true; result?: UploadApiResponse }
  | { success: false; error: UploadApiErrorResponse };

// function fixCyrillicEncoding(str: string) {
//   // Create a buffer from the string with wrong encoding
//   const bytes = new Uint8Array([...str].map((c) => c.charCodeAt(0)))
//   // Decode using TextDecoder assuming the input was incorrectly encoded as ISO-8859-1
//   const decodedStr = new TextDecoder('utf-8').decode(bytes)
//   return decodedStr
// }

// function fixCyrillicEncoding(str: string) {
//   // Create a buffer from the string with wrong encoding
//   const bytes = new Uint8Array(Array.prototype.map.call(str, (c: string) => c.charCodeAt(0)))
//   // Decode using TextDecoder assuming the input was incorrectly encoded as ISO-8859-1
//   const decodedStr = new TextDecoder('utf-8').decode(bytes)
//   return decodedStr
// }

const uploadToCloudinary = (
  fileUri: string,
  fileName: string
): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: 'auto',
        filename_override: fileName,
        unique_filename: false,
        use_filename: true,
        folder: 'boop', // any sub-folder name in your cloud
      })
      .then((result) => {
        resolve({ success: true, result });
      })
      .catch((error) => {
        reject({ success: false, error });
      });
  });
};

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get('file') as File;

    const fileBuffer = await file.arrayBuffer();

    const mimeType = file.type;
    const encoding = 'base64';
    const base64Data = Buffer.from(fileBuffer).toString('base64');

    const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data;

    const res = await uploadToCloudinary(fileUri, file.name);

    if (res.success && res.result) {
      if (res.success && res.result) {
        return NextResponse.json({
          message: 'success',
          fileUrl: res.result.secure_url,
          fileId: res.result.public_id,
        });
      }
    } else return NextResponse.json({ message: 'failure' });
  } catch (error) {
    console.log(error);
  }
}

// export async function DELETE(req: Request) {
//   try {
//     const data = await req.json()
//     console.log(data)
//     // await cloudinary.uploader.destroy(data.imageId)
//     return { success: true }
//   } catch (error) {
//     console.log(error)
//   }
// }
