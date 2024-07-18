'use client';

import React, { useState } from 'react';
import { useModal } from '../../../providers/ModalProvider';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { applicationsApi } from '@/store/api/applicationsApi';
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
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsProcessing(true);
      const response = await addApplication(data);

      if (response && response.data) {
        openModal(
          <div className="pb-[110px] pt-10 text-center font-semibold text-violet">
            <p className="mb-5">{tClownSchoolForm('formSubmitted')}</p>
            <p>{tClownSchoolForm('contactWithinThreeDays')}</p>
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
    }
  };

  // // Fake form submission function
  // const fakeFormSubmission = () => {
  //   return new Promise<{ success: boolean }>((resolve) => {
  //     setTimeout(() => resolve({ success: Math.random() > 0.5 }), 1000);
  //   });
  // };

  return (
    <section className="mb-[120px] bg-bgYellow">
      <div className="container mx-auto flex max-w-screen-3xl flex-col py-8 ml:flex-row lg:py-16">
        <div className="relative mb-8 flex flex-col justify-center text-mainViolet md:mb-0 md:max-w-[60%] ml:w-[55%] lg:max-w-[658px] lg:w-1/2 ml:pr-10">
          <SectionTitle
            title={tClownSchoolFormDescription('formTitle')}
            className="mb-2"
            titleClassName="max-ml:text-3xl"
          />
          <p className="md:mb-6 ml:mb-14 text-lg ml:text-xl">
            {tClownSchoolFormDescription('formSubtitle')}
            <br />
            {tClownSchoolFormDescription('formDescription')}
          </p>
          <div className="max-ml:absolute max-ml:-right-[65%] flex items-baseline space-x-4">
            <Image
              src="/images/clown1.svg"
              alt="Clown"
              width={61}
              height={45}
              className="w-[61px] h-[45px] max-ml:transform max-ml:scale-x-[-1]"
            />
            <Image
              src="/images/clown2.svg"
              alt="Clown"
              width={141}
              height={105}
              className="max-ml:transform max-ml:scale-x-[-1]"
            />
            <Image
              src="/images/clown3.svg"
              alt="Clown"
              width={232}
              height={172}
              className="max-ml:hidden"
            />
          </div>
        </div>
        <div className="md:max-w-[55%] lg:max-w-[522px] lg:ml-auto lg:mr-[96px] relative">
          <Image
            src="/images/clown3.svg"
            alt="Clown"
            width={232}
            height={172}
            className="absolute bottom-0 -right-[80%] scale-x-[-1] transform ml:hidden"
          />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-mainViolet"
          >
            <h2 className="mb-2 text-2xl font-bold">{tForm('joinUs')}</h2>
            <p className="mb-6 mt-0 text-[16px]">{tForm('leaveForm')}</p>
            <div className="mb-6">
              <label className="mb-1 block text-xl font-bold">
                {tForm('name')} <span className="mt-1 text-red">*</span>
              </label>
              <input
                {...register('name', { required: tForm('required') })}
                type="text"
                placeholder={tForm('name')}
                className="flex h-[48px] w-full items-center gap-2 rounded-2xl border border-yellow p-2"
              />
              {errors.name && (
                <p className="mt-1 text-red">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-xl font-bold">
                {tForm('phone')} <span className="mt-1 text-red">*</span>
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
                className="flex h-[48px] w-full items-center gap-2 rounded-2xl border border-yellow p-2"
              />
              {errors.phone && (
                <p className="mt-1 text-red">{errors.phone.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-xl font-bold">
                {tForm('email')} <span className="mt-1 text-red">*</span>
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
                className="flex h-[48px] w-full items-center gap-2 rounded-2xl border border-yellow p-2"
              />
              {errors.email && (
                <p className="mt-1 text-red">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="mb-1 block text-[20px] font-bold">
                {tForm('social')}
              </label>
              <input
                {...register('social')}
                type="text"
                placeholder={tForm('socialPlaceholder')}
                className="flex h-[48px] w-full items-center gap-2 rounded-2xl border border-yellow p-2"
              />
            </div>
            <button
              type="submit"
              className="w-fit rounded-[32px] bg-red px-8 py-4 text-xl font-bold text-white"
            >
              {isProcessing ? tForm('processing') : tForm('submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ClownSchoolForm;
