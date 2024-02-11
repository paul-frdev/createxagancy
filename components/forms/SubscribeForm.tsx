'use client';

import { Input } from '../ui/Input';
import { Form } from './Form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormValues = {
  email: string;
};

const Schema = yup.object().shape({
  email: yup.string().email('Enter a valid working email').required('your working email is required'),
});

export const SubscribeForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(Schema),
    defaultValues: { email: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Form className="justify-center flex-col xsm:flex-row gap-y-4 xsm:gap-y-0 items-end xsm:items-center" buttonLabel="Subscribe" onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="bg-white w-full max-w-[422px] border-transparent rounded"
        labelStyles={{ color: errors.email?.message ? '#d32f2f' : '#9a9ca5' }}
        inputStyles={{ color: '#9a9ca5', border: errors.email?.message ? '1px solid #d32f2f' : '1px solid transparent' }}
        helperStyles={{ position: 'absolute', bottom: '-24px', left: '0' }}
        name="email"
        control={control}
        label="Your working email"
        type="email"
      />
    </Form>
  );
};
