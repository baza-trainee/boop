'use client';

import { useState } from 'react';
import Image from 'next/image';
import axios from '@/utils/axios';
import { ITeamMember } from '@/types/team';
import { useAppDispatch } from '@/store/hook';
import { openModal } from '@/store/slices/modalSlice';
import { openAlert } from '@/store/slices/alertSlice';
import { teamApi } from '@/store/api/teamApi';
import PageTitle from '../shared/PageTitle';
import ActionButtons from '../shared/ActionButtons';
import FormModal from '../shared/FormModal';
import AddTeamForm from './form/AddTeamForm';
import EditTeamForm from './form/EditTeamForm';
import Loader from '@/components/shared/loader/Loader';

const TeamPage = () => {
  const dispatch = useAppDispatch();
  const {
    data: team,
    isLoading,
    isFetching,
  } = teamApi.useGetAllTeamQuery('team');
  const [deleteTeamMember] = teamApi.useDeleteTeamMemberMutation();
  const [currentId, setCurrentId] = useState('');

  if (isLoading || isFetching) return <Loader />;

  const handleEdit = (id: string) => {
    setCurrentId(id);
    dispatch(openModal({ type: 'edit-team-member' }));
  };

  const handleDelete = (id: string, imageId: string) => {
    dispatch(
      openAlert({
        data: {
          state: 'confirm',
          message: 'Ви впевнеі, що хочете видалити запис з Команди?',
          func: async () => {
            await axios.delete(`/cloudinary/${encodeURIComponent(imageId)}`);
            await deleteTeamMember(id);
            dispatch(
              openAlert({
                data: {
                  state: 'success',
                  message: 'Запис успішно видалено з Команди!',
                },
              })
            );
          },
        },
      })
    );
  };

  return (
    <section className="no-scrollbar relative max-h-[150vh] overflow-y-auto px-[24px] py-[100px]">
      <PageTitle title="Команда" />
      <div className="flex flex-wrap gap-[32px]">
        <div className="flex h-[447px] w-[306px] flex-col items-center justify-center gap-[10px] bg-bgViolet font-[800] text-violet">
          <span className="text-xl">Додати учасника</span>
          <button
            onClick={() => dispatch(openModal({ type: 'add-team-member' }))}
          >
            <Image src="/images/add.svg" alt="add" width={100} height={100} />
          </button>
        </div>
        {team &&
          team.map((member: ITeamMember) => (
            <div
              key={member.id}
              className="relative flex h-[447px] w-[306px] flex-col items-center justify-center"
            >
              <p className="sideText absolute -left-6 top-0 rotate-180 font-medium [writing-mode:vertical-lr]">
                {member.nameUa}
              </p>
              <ActionButtons
                action="all"
                editAction={() => handleEdit(member.id)}
                deleteAction={() => handleDelete(member.id, member.imageId)}
              />
              <Image
                src={member.imageUrl}
                alt={member.nameUa}
                width={306}
                height={447}
                className="h-[447px] w-[306px] object-cover"
              />
            </div>
          ))}
      </div>
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
