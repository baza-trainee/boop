'use client';
import { applicationsApi } from '@/store/api/applicationsApi';
import PageTitle from '../shared/PageTitle';
import Loader from '@/components/shared/loader/Loader';

const ApplicationsPage = () => {
  const { data, isLoading, isFetching } =
    applicationsApi.useGetAllApplicationsQuery();

  if (isLoading || isFetching) return <Loader />;

  return (
    <section className="relative h-[864px] px-[24px] py-[100px]">
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
                <td className="h-[60px] border border-violet p-2 text-center md:table-cell">
                  <button className="text-center font-[800] text-violet underline ">
                    Обробити
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default ApplicationsPage;
