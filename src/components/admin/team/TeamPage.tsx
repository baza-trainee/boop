'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from '@/lib/axios';
import { ITeamMember } from '@/types/team';
import { useAppDispatch } from '@/store/hook';
import { openModal } from '@/store/slices/modalSlice';
import { openAlert, closeAlert } from '@/store/slices/alertSlice';
import { teamApi } from '@/store/api/teamApi';
import PageTitle from '../shared/PageTitle';
import ActionButtons from '../shared/ActionButtons';
import FormModal from '../shared/FormModal';
import AddTeamForm from './form/AddTeamForm';
import EditTeamForm from './form/EditTeamForm';
import Loader from '@/components/shared/loader/Loader';
import Pagination from '../shared/Pagination';

const TeamPage = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentId, setCurrentId] = useState('');
  const {
    data: team,
    isLoading,
    isFetching,
    isError,
  } = teamApi.useGetAllTeamQuery({ page: currentPage, limit: 5 });
  const [deleteTeamMember] = teamApi.useDeleteTeamMemberMutation();

  const handleEdit = (id: string) => {
    setCurrentId(id);
    dispatch(openModal({ type: 'edit-team-member' }));
  };

  const handleDelete = (id: string, imageId: string) => {
    dispatch(
      openAlert({
        data: {
          state: 'confirm',
          message: 'Ви впевнені, що хочете видалити учасника з Команди?',
          func: async () => {
            await axios.delete(`/cloudinary/${encodeURIComponent(imageId)}`);
            const res = await deleteTeamMember(id);
            dispatch(closeAlert());
            if (res && res.data) {
              dispatch(
                openAlert({
                  data: {
                    state: 'success',
                    message: 'Учасника успішно видалено з Команди!',
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
    <section className="relative h-[864px] px-[24px] py-[100px]">
      <PageTitle title="Команда" />
      <div className="flex flex-wrap gap-[32px]">
        <div className="flex h-[247px] w-[306px] flex-col items-center justify-center gap-[10px] bg-bgViolet font-[800] text-violet">
          <span className="text-xl">Додати учасника</span>
          <button
            onClick={() => dispatch(openModal({ type: 'add-team-member' }))}
          >
            <Image src="/images/add.svg" alt="add" width={100} height={100} />
          </button>
        </div>
        {team &&
          team.data.map((member: ITeamMember) => (
            <div
              key={member.id}
              className="relative flex h-[247px] w-[306px] flex-col items-center justify-center"
            >
              <Image
                src={member.imageUrl}
                alt={member.nameUa}
                width={306}
                height={247}
                className="h-[247px] w-[306px] object-cover"
              />
              <p className="absolute bottom-[44px] left-0 flex h-[37px] w-full items-center justify-center bg-bgVioletTransparent text-[16px] font-[800] text-textViolet">
                {member.nameUa}
              </p>
              <ActionButtons
                action="all"
                editAction={() => handleEdit(member.id)}
                deleteAction={() => handleDelete(member.id, member.imageId)}
              />
            </div>
          ))}
      </div>

      {team && team?.meta.totalPages > 1 && (
        <Pagination
          totalPages={team.meta.totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}

      <FormModal type="add-team-member">
        <AddTeamForm />
      </FormModal>
      <FormModal type="edit-team-member">
        <EditTeamForm id={currentId} />
      </FormModal>
    </section>
  );
};

export default TeamPage;
