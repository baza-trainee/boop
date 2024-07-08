"use client";

import React from 'react';
import { useModal } from '../../../providers/ModalProvider';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import SectionTitle from '../../shared/SectionTitle';

interface FormData {
  name: string;
  phone: string;
  email: string;
  social: string;
}

const ClownSchoolForm: React.FC = () => {
  const tForm = useTranslations('Form');
  const tClownSchoolForm = useTranslations('ClownSchoolForm');
  const tClownSchoolFormDescription = useTranslations('ClownSchoolFormDescription');

  const { openModal } = useModal();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate form submission
      const response = await fakeFormSubmission();

      if (response.success) {
        openModal(
          <div className="text-center text-violet pt-10 pb-[110px] font-semibold">
            <p className="mb-5">{tClownSchoolForm('formSubmitted')}</p>
            <p>{tClownSchoolForm('contactWithinThreeDays')}</p>
            <Image
              src="/images/success-image.svg"
              alt="Clown"
              width={94}
              height={180}
              className="absolute left-10 bottom-5"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        );
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      openModal(
        <div className="text-center text-violet pt-10 pb-[110px] font-semibold">
          <p className="mb-5">{tClownSchoolForm('somethingWentWrong')}</p>
          <p>{tClownSchoolForm('pleaseTryAgain')}</p>
          <Image
            src="/images/failure-image.svg"
            alt="Clown"
            width={94}
            height={180}
            className="absolute right-10 bottom-5"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>,
      );
    }
  };

  // Fake form submission function
  const fakeFormSubmission = () => {
    return new Promise<{ success: boolean }>((resolve) => {
      setTimeout(() => resolve({ success: Math.random() > 0.5 }), 1000);
    });
  };

  return (
    <div className="bg-bgYellow mb-[120px]">
      <div className="container mx-auto max-w-screen-3xl flex flex-col lg:flex-row p-8 lg:p-16">
        <div className="lg:w-1/2 flex flex-col justify-center mb-8 lg:mb-0 text-mainViolet lg:pr-10">
          <SectionTitle title={tClownSchoolFormDescription('formTitle')} className="mb-6" />
          <p className="text-xl mb-8">
            {tClownSchoolFormDescription('formSubtitle')}<br />
            {tClownSchoolFormDescription('formDescription')}</p>
          <div className="flex items-baseline space-x-4">
            <Image
              src="/images/clown1.svg"
              alt="Clown"
              width={61}
              height={45}
            />
            <Image
              src="/images/clown2.svg"
              alt="Clown"
              width={141}
              height={105}
            />
            <Image
              src="/images/clown3.svg"
              alt="Clown"
              width={232}
              height={172}
            />
          </div>
        </div>
        <div className="lg:max-w-[522px]">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-mainViolet">
            <h2 className="text-2xl mb-2 font-bold">{tForm('joinUs')}</h2>
            <p className="mt-0 text-[16px] mb-6">{tForm('leaveForm')}</p>
            <div className="mb-6">
              <label className="mb-1 text-xl font-bold block">
                {tForm('name')} <span className="text-red mt-1">*</span>
              </label>
              <input
                {...register('name', { required: tForm('required') })}
                type="text"
                placeholder={tForm('name')}
                className="flex w-full h-[48px] p-2 items-center gap-2 border border-yellow rounded-2xl"
              />
              {errors.name && <p className="text-red mt-1">{errors.name.message}</p>}
            </div>
            <div className="mb-6">
              <label className="mb-1 text-xl font-bold block">
                {tForm('phone')} <span className="text-red mt-1">*</span>
              </label>
              <input
                {...register('phone', {
                  required: tForm('required'),
                  pattern: {
                    value: /^\+380\d{9}$/,
                    message: tForm('invalidPhone'),
                  },
                })}
                type="text"
                placeholder={tForm('phonePlaceholder')}
                className="flex w-full h-[48px] p-2 items-center gap-2 border border-yellow rounded-2xl"
              />
              {errors.phone && <p className="text-red mt-1">{errors.phone.message}</p>}
            </div>
            <div className="mb-6">
              <label className="mb-1 text-xl font-bold block">
                {tForm('email')} <span className="text-red mt-1">*</span>
              </label>
              <input
                {...register('email', {
                  required: tForm('required'),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: tForm('invalidEmail'),
                  },
                })}
                type="email"
                placeholder={tForm('emailPlaceholder')}
                className="flex w-full h-[48px] p-2 items-center gap-2 border border-yellow rounded-2xl"
              />
              {errors.email && <p className="text-red mt-1">{errors.email.message}</p>}
            </div>
            <div className="mb-6">
              <label className="mb-1 text-[20px] font-bold block">{tForm('social')}</label>
              <input
                {...register('social')}
                type="text"
                placeholder={tForm('socialPlaceholder')}
                className="flex w-full h-[48px] p-2 items-center gap-2 border border-yellow rounded-2xl"
              />
            </div>
            <button
              type="submit"
              className="rounded-[32px] bg-red text-white text-xl font-bold py-4 px-8 w-fit"
            >
              {tForm('submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClownSchoolForm;
