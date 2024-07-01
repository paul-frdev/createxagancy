'use client';

import { CheckboxLabels } from '../elements/Checkbox';
import { Input } from '../elements/Input';
import { Form } from './Form';
import { cn } from '@/app/lib/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormValues = {
  email: string;
  isChecked: boolean;
};

const Schema = yup.object().shape({
  email: yup.string().email('Enter a valid working email').required('your working email is required'),
  isCheckBox: yup.boolean().required(),
});

export const SubscribeForm = ({
  isCheckBox = false,
  className,
  buttonClasses,
  inputStyles,
  classInput,
}: {
  isCheckBox?: boolean;
  className?: string;
  buttonClasses?: string;
  inputStyles?: React.CSSProperties;
  classInput?: string;
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(Schema) as any,
    defaultValues: { email: '', isChecked: false },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    reset();
  };

  return (
    <Form
      className={cn(`justify-start flex-col max-w-[560px] mx-auto gap-y-4 items-start`, className)}
      buttonLabel="Subscribe"
      buttonClasses={buttonClasses}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className={cn(`bg-white w-full max-w-[422px] border-transparent rounded`, classInput)}
        labelStyles={{ color: errors.email?.message ? '#d32f2f' : '#9a9ca5' }}
        inputStyles={{ color: '#9a9ca5', border: errors.email?.message ? '1px solid #d32f2f' : '1px solid transparent', ...inputStyles }}
        helperStyles={{ position: 'absolute', bottom: '-24px', left: '0' }}
        name="email"
        control={control}
        label="Your working email"
        type="email"
      />
      {isCheckBox && <CheckboxLabels className="mb-4" label="I agree to receive communications from Createx Online School" />}
    </Form>
  );
};
