import { AuthSocialMedia } from '../common/AuthSocialMedia';
import { Button } from '../ui/Button';
import { CheckboxLabels } from '../ui/Checkbox';
import { Heading } from '../ui/Heading';
import { Input } from '../ui/Input';
import { PhoneInput } from '../ui/PhoneInput';
import { Typography } from '../ui/Typography';
import { Form } from './Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const Schema = yup.object().shape({
  email: yup.string().email('Enter a valid email address').required('Email address is required').required(),
  password: yup.string().required(),
});

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(Schema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full max-w-[390px] mx-auto mx-4">
      <Typography className=" text-gray700 text-[0.85rem] mb-8 normal-case text-center">Sign in to your account using email and password provided during registration.</Typography>
      <Form
        className="flex-col  gap-y-4 items-center border-b border-b-solid border-b-gray300"
        buttonLabel="Sign Up"
        onSubmit={handleSubmit(onSubmit)}
        buttonClasses="text-nowrap py-[0.55rem] w-full mx-auto mb-4 hover:bg-transparent"
      >
        <div className="flex flex-col  justify-between items-center gap-y-8 w-full">
          <Input
            className="w-full border-white rounded text-gray600"
            name="email"
            control={control}
            inputStyles={{
              height: 36,
              paddingTop: 4,
              fontSize: '0.85rem',
              paddingBottom: '2px',
              color: '#9a9ca5',
              backgroundColor: 'rgb(255, 255, 255)',
              border: errors.email?.message ? '1px solid #d32f2f' : '1px solid rgb(215, 218, 221)',
            }}
            labelStyles={{ fontSize: '0.75rem', color: errors.email?.message ? '#d32f2f' : '#9a9ca5' }}
            helperStyles={{ position: 'absolute', bottom: '-24px', left: '-12px' }}
            label="Enter you email"
            type="text"
          />
          <Input
            className="w-full border-white rounded text-gray600"
            name="password"
            ariaLabel="password"
            control={control}
            inputStyles={{
              height: 36,
              paddingTop: 4,
              fontSize: '0.85rem',
              paddingBottom: '2px',
              color: '#9a9ca5',
              backgroundColor: 'rgb(255, 255, 255)',
              border: errors.email?.message ? '1px solid #d32f2f' : '1px solid rgb(215, 218, 221)',
            }}
            labelStyles={{ fontSize: '0.75rem', color: errors.email?.message ? '#d32f2f' : '#9a9ca5' }}
            helperStyles={{ position: 'absolute', bottom: '-24px', left: '-12px' }}
            label="password"
            type="password"
          />
          <div className="w-full flex justify-between items-center">
            <CheckboxLabels label="Keep me signed in" />
            <Button className=" w-fit bg-transparent hover:bg-transparent text-orange hover:text-orange p-0 border-none hover:border-none underline font-latoRegular font-[400] text-[0.88rem]">
              Forgot password?
            </Button>
          </div>
        </div>
      </Form>
      <div className="flex justify-start items-center">
        <p className="text-[0.88rem] font-latoRegular font-[400]">Dont have an account?</p>
        <Button href="/" className="text-orange bg-transparent border-none hover:text-orange hover:border-none hover:bg-transparent p-0 w-fit underline">
          Sign up
        </Button>
      </div>
      <AuthSocialMedia title="Or sign in with" />
    </div>
  );
};
