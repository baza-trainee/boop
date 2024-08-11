'use client';

import axios from '@/utils/axios';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/hook';
import { documentsApi } from '@/store/api/documentsApi';
import PageTitle from '../shared/PageTitle';
import Loader from '@/components/shared/loader/Loader';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TDocumentScheme, pdfValidation } from './scheme';
import FileInput from '../ui/FileInput';
import { openAlert } from '@/store/slices/alertSlice';
import { closeModal } from '@/store/slices/modalSlice';

const DocumentsPage = () => {
  const dispatch = useAppDispatch();
  const [isProcessing, setIsProcessing] = useState(false);

  const [editDocument] = documentsApi.useEditDocumentsMutation();
  // const [addDocument] = documentsApi.useAddDocumentsMutation();

  const {
    data: documents,
    isLoading,
    isFetching,
    isError,
  } = documentsApi.useGetAllDocumentsQuery();

  const privacy_policy = documents?.find(
    (document) => document.title === 'Політика конфіденційності'
  );
  const terms_of_use = documents?.find(
    (document) => document.title === 'Правила користування'
  );
  const regulations = documents?.find(
    (document) => document.title === 'Статут'
  );
  const accounting = documents?.find(
    (document) => document.title === 'Звітність'
  );

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<TDocumentScheme>({
    resolver: zodResolver(pdfValidation),
    mode: 'onChange',
    defaultValues: {
      privacy_policy: [],
      terms_of_use: [],
      regulations: [],
      accounting: [],
    },
  });

  useEffect(() => {
    if (documents) {
      setValue('privacy_policy', [
        new File([], privacy_policy?.documentUrl as string, {
          type: 'for-url',
        }),
      ]);
      setValue('terms_of_use', [
        new File([], terms_of_use?.documentUrl as string, {
          type: 'for-url',
        }),
      ]);
      setValue('regulations', [
        new File([], regulations?.documentUrl as string, {
          type: 'for-url',
        }),
      ]);
      setValue('accounting', [
        new File([], accounting?.documentUrl as string, {
          type: 'for-url',
        }),
      ]);
    }
  }, [documents]);

  const onSubmit: SubmitHandler<TDocumentScheme> = async (
    values: TDocumentScheme
  ) => {
    if (
      !values.accounting[0].size &&
      !values.regulations[0].size &&
      !values.terms_of_use[0].size &&
      !values.privacy_policy[0].size
    )
      return;
    try {
      let response: unknown;
      setIsProcessing(true);

      if (values.accounting[0].size > 0) {
        const formData = new FormData();
        formData.append('file', values.accounting[0]);
        formData.append('folderName', 'documents');
        await axios.delete(
          `/cloudinary/${encodeURIComponent(accounting?.documentId as string)}`
        );
        const res = await axios.post('/cloudinary', formData);
        const newDocument = {
          documentUrl: res.data.fileUrl,
          documentId: res.data.fileId,
        };
        const id = accounting?.id;
        response = await editDocument({ id, newDocument });
        // if (accounting) {
        //   const newDocument = {
        //     documentUrl: res.data.fileUrl,
        //     documentId: res.data.fileId,
        //   };
        //   const id = accounting?.id;
        //   response = await editDocument({ id, newDocument });
        // } else {
        //   const newDocument = {
        //     title: 'Звітність',
        //     documentUrl: res.data.fileUrl,
        //     documentId: res.data.fileId,
        //   };
        //   response = await addDocument(newDocument);
        // }
      }
      if (values.regulations[0].size > 0) {
        const formData = new FormData();
        formData.append('file', values.regulations[0]);
        formData.append('folderName', 'documents');
        await axios.delete(
          `/cloudinary/${encodeURIComponent(regulations?.documentId as string)}`
        );
        const res = await axios.post('/cloudinary', formData);
        const newDocument = {
          documentUrl: res.data.fileUrl,
          documentId: res.data.fileId,
        };
        const id = regulations?.id;
        response = await editDocument({ id, newDocument });
      }
      if (values.terms_of_use[0].size > 0) {
        const formData = new FormData();
        formData.append('file', values.terms_of_use[0]);
        formData.append('folderName', 'documents');
        await axios.delete(
          `/cloudinary/${encodeURIComponent(terms_of_use?.documentId as string)}`
        );
        const res = await axios.post('/cloudinary', formData);
        const newDocument = {
          documentUrl: res.data.fileUrl,
          documentId: res.data.fileId,
        };
        const id = terms_of_use?.id;
        response = await editDocument({ id, newDocument });
      }
      if (values.privacy_policy[0].size > 0) {
        const formData = new FormData();
        formData.append('file', values.privacy_policy[0]);
        formData.append('folderName', 'documents');
        await axios.delete(
          `/cloudinary/${encodeURIComponent(privacy_policy?.documentId as string)}`
        );
        const res = await axios.post('/cloudinary', formData);
        const newDocument = {
          documentUrl: res.data.fileUrl,
          documentId: res.data.fileId,
        };
        const id = privacy_policy?.id;
        response = await editDocument({ id, newDocument });
      }

      if (response) {
        dispatch(
          openAlert({
            data: {
              state: 'success',
              message: 'Документи успішно відредаговано!',
            },
          })
        );
        dispatch(closeModal());
      }
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (isError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="flex h-[50%] w-[80%] items-center justify-center rounded-[20px] bg-slate-200 p-[40px]">
          <p className="text-center text-[32px] text-yellow">
            Сталася помилка під час завантаження даних.
            <br /> Будь ласка, спробуйте оновити сторінку або повторити спробу
            пізніше.
          </p>
        </div>
      </div>
    );
  }

  if (isLoading || isFetching) return <Loader />;

  return (
    <section className="relative px-[24px] py-[100px]">
      <PageTitle title="Документи" />
      <div className="flex flex-col gap-[24px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          className="flex w-[292px] flex-col items-start gap-[40px]"
        >
          <FileInput
            name="regulations"
            control={control}
            placeholder="Завантажити файл"
            title="Статут"
            isEditMode={true}
            accept="application/pdf"
          />
          <FileInput
            name="accounting"
            control={control}
            placeholder="Завантажити файл"
            title="Звітність"
            isEditMode={true}
            accept="application/pdf"
          />
          <FileInput
            name="privacy_policy"
            control={control}
            placeholder="Завантажити файл"
            title="Політика конфіденційності"
            isEditMode={true}
            accept="application/pdf"
          />
          <FileInput
            name="terms_of_use"
            control={control}
            placeholder="Завантажити файл"
            title="Правила користування"
            isEditMode={true}
            accept="application/pdf"
          />
          <div className="relative mt-[60px] flex w-full justify-between">
            <button
              disabled={!!Object.keys(errors).length}
              className="min-w-[123px] whitespace-nowrap rounded-3xl bg-red px-4 py-2 font-[500] text-white disabled:bg-[#E3E3E4] disabled:text-[#97979A]"
            >
              {isProcessing ? 'Обробка запиту...' : 'Змінити'}
            </button>
            <button
              disabled={!!Object.keys(errors).length}
              onClick={() => dispatch(closeModal())}
              className="w-[149px] rounded-3xl border border-yellow px-4 py-2 text-violet disabled:border-[#E3E3E4] disabled:text-[#97979A]"
            >
              Скасувати
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DocumentsPage;
