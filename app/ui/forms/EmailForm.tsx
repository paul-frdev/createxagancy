'use client';

import { Input } from '../elements/Input';
import { Form } from './Form';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormValues = {
  email: string;
};

const Schema = yup.object().shape({
  email: yup.string().email('Enter a valid email address').required('Email address is required'),
});

export const EmailForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(Schema) as any,
    defaultValues: { email: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    reset();
  };

  return (
    <Form
      className="justify-center relative w-full"
      buttonLabel=""
      icon={<ArrowForwardIcon />}
      buttonClasses="absolute -top-[15%] right-[1px] bg-transparent hover:bg-transparent hover:text-orange hover:border-transparent p-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className="w-full max-w-[286px] border-transparent rounded text-white"
        name="email"
        control={control}
        inputStyles={{
          height: 36,
          paddingTop: 4,
          fontSize: '0.85rem',
          paddingBottom: '2px',
          color: '#fff',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          border: errors.email?.message ? '1px solid #d32f2f' : '1px solid rgba(255, 255, 255, 0.2)',
        }}
        labelStyles={{ fontSize: '0.75rem', color: errors.email?.message ? '#d32f2f' : '#fff' }}
        helperStyles={{ position: 'absolute', bottom: '-24px', left: '0' }}
        label="Email address"
        type="email"
      />
    </Form>
  );
};
