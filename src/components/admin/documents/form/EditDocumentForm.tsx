import axios from '@/utils/axios';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TDocumentScheme, pdfValidation } from './scheme';
import { useAppDispatch } from '@/store/hook';
import { closeModal } from '@/store/slices/modalSlice';
import { openAlert } from '@/store/slices/alertSlice';
import { documentsApi } from '@/store/api/documentsApi';
import FileInput from '../../ui/FileInput';
import TextInput from '../../ui/TextInput';

const EditDocumentForm = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);

  const [editDocument] = documentsApi.useEditDocumentsMutation();
  const { data: documents } = documentsApi.useGetAllDocumentsQuery('documents');

  const document = documents?.find((document) => document.id === Number(id));

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<TDocumentScheme>({
    resolver: zodResolver(pdfValidation),
    mode: 'onChange',
    defaultValues: { document: [], title: '' },
  });

  useEffect(() => {
    if (document) {
      setValue('title', document?.title);
      setValue('document', [
        new File([], document?.documentUrl, { type: 'for-url' }),
      ]);
    }
  }, [document]);

  const onSubmit: SubmitHandler<TDocumentScheme> = async (
    values: TDocumentScheme
  ) => {
    try {
      setIsProcessing(true);
      if (values.document[0]?.size > 0) {
        const formData = new FormData();
        formData.append('file', values.document[0]);
        formData.append('folderName', 'documents');
        await axios.delete(
          `/cloudinary/${encodeURIComponent(document?.documentId as string)}`
        );
        const res = await axios.post('/cloudinary', formData);
        const newDocument = {
          title: values.title,
          documentUrl: res.data.fileUrl,
          documentId: res.data.fileId,
        };
        const response = await editDocument({ id, newDocument });
        if (response) {
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Документ успішно відредаговано!',
              },
            })
          );
          dispatch(closeModal());
        }
      } else {
        const newDocument = {
          title: values.title,
          documentUrl: document?.documentUrl,
          documentId: document?.documentId,
        };
        const response = await editDocument({ id, newDocument });
        if (response && response.data) {
          dispatch(closeModal());
          dispatch(
            openAlert({
              data: {
                state: 'success',
                message: 'Документ успішно відредаговано!',
              },
            })
          );
        } else if (response.error) {
          alert(response.error);
        }
      }
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1 className="mb-[60px] w-full text-center text-3xl font-[500] text-violet">
        Редагування PDF документу
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="flex w-[50%] flex-col"
      >
        <div className="flex w-full flex-col items-center justify-center gap-[24px]">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextInput
                {...field}
                errorText={errors.title?.message}
                placeholder="Введіть назву документу"
                title="Назва документу:"
                isRequired={true}
              />
            )}
          />
          <FileInput
            name="document"
            control={control}
            placeholder={'Оберіть PDF файл'}
            title="Оберіть файл:"
            isRequired={true}
            accept="application/pdf"
          />
          <div className="relative mt-[60px] flex w-full justify-between">
            <span className="absolute -top-8 left-0 text-sm">
              Змінити PDF документ?
            </span>
            <button
              disabled={!!Object.keys(errors).length}
              className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 text-white disabled:bg-gray-500"
            >
              {isProcessing ? 'Обробка запиту...' : 'Оновити'}
            </button>
            <button
              onClick={() => dispatch(closeModal())}
              className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-violet"
            >
              Скасувати
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditDocumentForm;
