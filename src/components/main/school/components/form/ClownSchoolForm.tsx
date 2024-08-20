'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { applicationsApi } from '@/store/api/applicationsApi';
import { useModal } from '@/components/providers/ModalProvider';
import { applicationValidation, TApplication } from './scheme';
import SectionTitle from '@/components/main/shared/SectionTitle';
import PurpleFormMan from './animatedMen/PurpleFormMan';
import OrangeFormMan from './animatedMen/OrangeFormMan';
import YellowFormMan from './animatedMen/YellowFormMan';

const ClownSchoolForm: React.FC = () => {
  const tForm = useTranslations();
  const [isProcessing, setIsProcessing] = useState(false);
  const tClownSchoolForm = useTranslations('ClownSchoolForm');
  const tClownSchoolFormDescription = useTranslations(
    'ClownSchoolFormDescription'
  );
  const [addApplication] = applicationsApi.useAddApplicationMutation();

  const { openModal } = useModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TApplication>({
    resolver: zodResolver(applicationValidation),
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      social: '',
    },
  });

  const onSubmit: SubmitHandler<TApplication> = async (data: TApplication) => {
    try {
      setIsProcessing(true);
      const response = await addApplication(data);

      if (response && response.data) {
        openModal(
          <div className="flex h-[310px] w-[800px] flex-col items-center justify-center text-center text-[24px] font-semibold text-violet">
            <div>
              <p className="mb-5">{tClownSchoolForm('formSubmitted')}</p>
              <p>{tClownSchoolForm('contactWithinThreeDays')}</p>
            </div>
            <Image
              src="/images/success-image.svg"
              alt="Clown"
              width={94}
              height={180}
              className="absolute bottom-5 left-10"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        );
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      openModal(
        <div className="pb-[110px] pt-10 text-center font-semibold text-violet">
          <p className="mb-5">{tClownSchoolForm('somethingWentWrong')}</p>
          <p>{tClownSchoolForm('pleaseTryAgain')}</p>
          <Image
            src="/images/failure-image.svg"
            alt="Clown"
            width={94}
            height={180}
            className="absolute bottom-5 right-10"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      );
    } finally {
      setIsProcessing(false);
      reset();
    }
  };

  return (
    <section className="relative mb-[90px] md:mb-[100px] md:bg-bgYellow 4xl:mb-[120px]">
      <div className="container mx-auto flex max-w-screen-3xl flex-col py-8 ml:flex-row lg:py-16">
        <div className="mb-8 flex flex-col justify-center text-mainViolet md:mb-0 md:max-w-[60%] ml:w-[55%] ml:pr-10 lg:w-1/2 lg:max-w-[658px]">
          <SectionTitle
            title={tClownSchoolFormDescription('formTitle')}
            className="mb-2"
            titleClassName="max-ml:text-3xl"
          />
          <p className="text-lg md:mb-6 ml:mb-14 ml:text-xl">
            {tClownSchoolFormDescription('formSubtitle')}
            <br />
            {tClownSchoolFormDescription('formDescription')}
          </p>
          <div id="animatedMen" className="flex ml:items-end">
            <YellowFormMan className="h-[45px] w-[61px] cursor-pointer max-ml:scale-x-[-1] max-ml:transform max-md:hidden md:absolute md:right-[60px] md:top-[140px] ml:static ml:mr-[40px]" />
            <OrangeFormMan className="h-[123px] w-[166px] cursor-pointer max-ml:scale-x-[-1] max-ml:transform max-md:hidden md:absolute md:right-[127px] md:top-[80px] ml:static" />
            <PurpleFormMan
              index={1}
              className="absolute -bottom-[50px] right-5 h-[118px] w-[163px] cursor-pointer max-ml:scale-x-[-1] md:bottom-[65px] md:right-14 md:h-[169px] md:w-[233px] ml:static ml:h-[203px] ml:w-[280px]"
            />
          </div>
        </div>
        <div className="relative md:max-w-[55%] lg:ml-auto lg:mr-[96px] lg:max-w-[522px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-mainViolet"
          >
            <h2 className="mb-2 text-2xl font-bold">{tForm('Form.joinUs')}</h2>
            <p className="mb-6 mt-0 text-[16px]">{tForm('Form.leaveForm')}</p>
            <div className="mb-6">
              <label className="mb-1 block text-xl font-bold">
                {tForm('Form.name')} <span className="mt-1 text-red">*</span>
              </label>
              <input
                {...register('name')}
                type="text"
                placeholder={tForm('Form.name')}
                className="flex h-[48px] w-full items-center gap-2 rounded-2xl border border-yellow p-2"
              />
              {errors.name && (
                <p className="mt-1 text-red">{tForm(errors.name.message)}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-xl font-bold">
                {tForm('Form.phone')} <span className="mt-1 text-red">*</span>
              </label>
              <input
                {...register('phone')}
                type="text"
                placeholder={tForm('Form.phonePlaceholder')}
                className="flex h-[48px] w-full items-center gap-2 rounded-2xl border border-yellow p-2"
              />
              {errors.phone && (
                <p className="mt-1 text-red">{tForm(errors.phone.message)}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-xl font-bold">
                {tForm('Form.email')} <span className="mt-1 text-red">*</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder={tForm('Form.emailPlaceholder')}
                className="flex h-[48px] w-full items-center gap-2 rounded-2xl border border-yellow p-2"
              />
              {errors.email && (
                <p className="mt-1 text-red">{tForm(errors.email.message)}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-[20px] font-bold">
                {tForm('Form.social')}
              </label>
              <input
                {...register('social')}
                type="text"
                placeholder={tForm('Form.socialPlaceholder')}
                className="flex h-[48px] w-full items-center gap-2 rounded-2xl border border-yellow p-2"
              />
              {errors.social && (
                <p className="mt-1 text-red">{tForm(errors.social.message)}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-fit rounded-[32px] bg-red px-8 py-4 text-xl font-bold text-white"
            >
              {isProcessing ? tForm('Form.processing') : tForm('Form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ClownSchoolForm;
