'use client';

import { useState } from 'react';
import PageTitle from '../shared/PageTitle';
import {
  ADD_TYPES,
  BUTTON_TITLE,
  EDIT_TYPES,
  PropsPartnersFriends,
  PartnersFriends,
  SECTION_PARTNERS_FRIENDS,
} from '@/types/partners-friends';
import Loader from '@/components/shared/loader/Loader';

import Image from 'next/image';
import { openModal } from '@/store/slices/modalSlice';
import { useAppDispatch } from '@/store/hook';
import FormModal from '../shared/FormModal';
import EditPartnersFriendsForm from './form/EditPartnersFriendsForm';
import { partnersFriendsApi } from '@/store/api/partnersFriendsApi';
import AddPartnersFriendsForm from './form/AddPartnersFriendsForm copy';
import ActionButtons from '../shared/ActionButtons';
import { openAlert } from '@/store/slices/alertSlice';
import axios from 'axios';

function PartnersFriendsPage({ title, section }: PropsPartnersFriends) {
  const dispatch = useAppDispatch();

  const [currentId, setCurrentId] = useState('');
  const [logoIdState, setLogoId] = useState('');
  const {
    data: partners,
    isLoading,
    isFetching,
  } = partnersFriendsApi.useGetAllPartnersFriendsQuery();

  const [deletePartnersFriends] =
    partnersFriendsApi.useDeletePartnersFriendsMutation();

  const handleEdit = (id: string, logoId: string) => {
    setCurrentId(id);
    setLogoId(logoId);
    dispatch(openModal({ type: EDIT_TYPES[section] }));
  };

  const handleDelete = (id: string, imageId: string, sectionDell: string) => {
    console.log(imageId);

    dispatch(
      openAlert({
        data: {
          state: 'confirm',
          message: `Ви впевнені, що хочете видалити цього ${sectionDell}?`,
          func: async () => {
            await axios.delete(`/cloudinary/${encodeURIComponent(imageId)}`);
            await deletePartnersFriends(id);
            dispatch(
              openAlert({
                data: {
                  state: 'confirm',
                  message: `${sectionDell} видалено`,
                },
              })
            );
          },
        },
      })
    );
  };

  if (isFetching || isLoading) {
    return <Loader />;
  }
  return (
    <section className="h-screen scroll-m-0 pb-[159px] pl-[24px] pt-[104px]">
      <PageTitle title={title} />
      <ul className=" flex max-h-[100vh] flex-wrap gap-6 overflow-y-auto">
        <li className="flex w-[306px] flex-col items-center justify-center gap-[10px] bg-[#edebf5] p-[36px]">
          <p className="ml-auto mr-auto font-['Raleway',_sans-serif] text-[20px] font-medium normal-case not-italic leading-[28px] tracking-[0px] text-[#50439f]">
            Додати {BUTTON_TITLE[section]}
          </p>
          <button
            type="button"
            onClick={() => {
              dispatch(openModal({ type: ADD_TYPES[section] }));
            }}
          >
            <Image src="/images/add.svg" alt="add" width={70} height={70} />
          </button>
        </li>
        {partners
          ?.filter((item) => item.section === SECTION_PARTNERS_FRIENDS[section])
          .map((item: PartnersFriends) => (
            <li
              key={item.id}
              className="relative flex h-[180px] w-[306px] flex-col justify-between bg-bgViolet p-2 pb-4"
            >
              <Image
                alt="logo"
                src={item.logoUrl}
                width={290}
                height={103}
                className="h-[103px] w-[290px] object-cover object-center"
              />
              <div className="relative h-11 w-full">
                <ActionButtons
                  action="all"
                  editAction={() => handleEdit(item.id, item.logoId)}
                  deleteAction={() =>
                    handleDelete(item.id, item.logoId, BUTTON_TITLE[section])
                  }
                />
              </div>
            </li>
          ))}
      </ul>
      <FormModal type={ADD_TYPES[section]}>
        <AddPartnersFriendsForm addType={section} />
      </FormModal>
      <FormModal type={EDIT_TYPES[section]}>
        <EditPartnersFriendsForm
          editType={section}
          logoId={logoIdState}
          id={currentId}
        />
      </FormModal>
    </section>
  );
}

export default PartnersFriendsPage;
