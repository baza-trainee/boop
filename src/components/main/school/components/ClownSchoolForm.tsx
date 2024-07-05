"use client";

import React from 'react';
import { useModal } from '../../../providers/ModalProvider';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface FormData {
  name: string;
  phone: string;
  email: string;
  social: string;
}

const ClownSchoolForm: React.FC = () => {
  const tForm = useTranslations('Form');
  const tClownSchoolForm = useTranslations('ClownSchoolForm');
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-yellow-100 p-6 rounded-lg shadow-md">
      <h1 className="text-2xl mb-2 text-purple-700">{tForm('joinUs')}</h1>
      <p className="mb-4 text-purple-700">{tForm('leaveForm')}</p>
      <div>
        <label className="block text-purple-700 mb-2">
          {tForm('name')} <span className="text-red">*</span>
        </label>
        <input
          {...register("name", { required: tForm('required') })}
          type="text"
          placeholder={tForm('name')}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-purple-700 mb-2">
          {tForm('phone')} <span className="text-red">*</span>
        </label>
        <input
          {...register("phone", {
            required: tForm('required'),
            pattern: {
              value: /^\+380\d{9}$/,
              message: tForm('invalidPhone'),
            }
          })}
          type="text"
          placeholder={tForm('phonePlaceholder')}
          className="w-full p-2 border rounded"
        />
        {errors.phone && <p className="text-red">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block text-purple-700 mb-2">
          {tForm('email')} <span className="text-red">*</span>
        </label>
        <input
          {...register("email", {
            required: tForm('required'),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: tForm('invalidEmail'),
            }
          })}
          type="email"
          placeholder={tForm('emailPlaceholder')}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red0">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-purple-700 mb-2">{tForm('social')}</label>
        <input
          {...register("social")}
          type="text"
          placeholder={tForm('socialPlaceholder')}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="rounded-[32px] bg-red px-[24px] py-[18px] text-[20px] font-bold leading-[20px] text-white">
        {tForm('submit')}
      </button>
    </form>
  );
};

export default ClownSchoolForm;
