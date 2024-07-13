import { cloudinary } from '@/lib/cloudinary'; // your config path
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { NextRequest, NextResponse } from 'next/server';

type UploadResponse =
  | { success: true; result?: UploadApiResponse }
  | { success: false; error: UploadApiErrorResponse };

const uploadToCloudinary = (
  fileUri: string,
  fileName: string,
  folderName: string
): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: 'auto',
        use_filename: true,
        unique_filename: true,
        folder: `boop/${folderName}`,
        filename_override: fileName,
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
    const folderName = formData.get('folderName');

    const fileBuffer = await file.arrayBuffer();

    const mimeType = file.type;
    const encoding = 'base64';
    const base64Data = Buffer.from(fileBuffer).toString('base64');

    const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data;

    const res = await uploadToCloudinary(
      fileUri,
      file.name,
      folderName as string
    );

    if (res.success && res.result) {
      return NextResponse.json({
        message: 'success',
        fileUrl: res.result.secure_url,
        fileId: res.result.public_id,
      });
    } else return NextResponse.json({ message: 'failure' });
  } catch (error) {
    console.log(error);
  }
}
