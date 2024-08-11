'use client';

import { useAppDispatch } from '@/store/hook';
import { applicationsApi } from '@/store/api/applicationsApi';
import PageTitle from '../shared/PageTitle';
import Loader from '@/components/shared/loader/Loader';
import Image from 'next/image';
import { openAlert, closeAlert } from '@/store/slices/alertSlice';

const ApplicationsPage = () => {
  const dispatch = useAppDispatch();
  const [deleteApplication] = applicationsApi.useDeleteApplicationMutation();
  const [editApplication] = applicationsApi.useEditApplicationMutation();
  const { data, isLoading, isFetching, isError } =
    applicationsApi.useGetAllApplicationsQuery();

  const handleDelete = (id: string) => {
    dispatch(
      openAlert({
        data: {
          state: 'confirm',
          message: 'Ви дійсно бажаєте видалити цю заявку?',
          func: async () => {
            const res = await deleteApplication(id);
            dispatch(closeAlert());
            if (res && res.data) {
              dispatch(
                openAlert({
                  data: {
                    state: 'success',
                    message: 'Заявку успішно видалено!',
                  },
                })
              );
            } else {
              alert('Щось пійшло не так, спробуйте пізніше');
            }
          },
        },
      })
    );
  };

  const handleEdit = async (id: string, isProcessed: boolean) => {
    await editApplication({ id, isProcessed });
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
    <section className="no-scrollbar relative max-h-[984px] overflow-auto px-[24px] py-[100px]">
      <PageTitle title="Заявки до школи" />
      <table className="block min-w-full border-collapse border border-violet md:table">
        <thead className="block border border-violet text-mainViolet md:table-header-group">
          <tr className="block border border-gray-300 md:table-row md:border-none">
            <th className="h-[46px] border border-violet p-2 text-left text-center md:table-cell">
              №
            </th>
            <th className="h-[46px] border border-violet p-2 text-left text-center md:table-cell">
              Ім’я
            </th>
            <th className="h-[46px] border border-violet p-2 text-left text-center md:table-cell">
              E-mail
            </th>
            <th className="h-[46px] border border-violet p-2 text-left text-center md:table-cell">
              Номер телефону
            </th>
            <th className="h-[46px] border border-violet p-2 text-left text-center md:table-cell">
              Соцмережі
            </th>
            <th className="h-[46px] border border-violet p-2 text-left text-center md:table-cell">
              Дія
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data &&
            data.map((row, index) => (
              <tr
                key={row.id}
                className="block border border-gray-300 md:table-row md:border-none"
              >
                <td className="h-[60px] border border-violet p-2 text-center md:table-cell">
                  {index + 1}
                </td>
                <td className="h-[60px] border border-violet p-2 text-center md:table-cell">
                  {row.name}
                </td>
                <td className="h-[60px] border border-violet p-2 text-center md:table-cell">
                  {row.email}
                </td>
                <td className="h-[60px] border border-violet p-2 text-center md:table-cell">
                  {row.phone}
                </td>
                <td className="h-[60px] border border-violet p-2 text-center md:table-cell">
                  {row.social}
                </td>
                <td className="h-[60px] border border-violet text-center md:table-cell">
                  <div className="flex w-full items-center justify-center gap-4 px-2">
                    {!row.isProcessed ? (
                      <button
                        onClick={() => handleEdit(row.id, row.isProcessed)}
                        className={`text-center font-[800] transition-all hover:underline ${!row.isProcessed ? 'text-violet' : 'text-[#666]'}`}
                      >
                        Обробити
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDelete(row.id)}
                        className="text-center font-[800] text-violet transition-all hover:scale-[1.1]"
                      >
                        <Image
                          src="/icons/admin/delete.svg"
                          width={25}
                          height={25}
                          alt="delete"
                        />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default ApplicationsPage;
