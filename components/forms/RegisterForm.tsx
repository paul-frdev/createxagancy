import { Heading } from '../ui/Heading';
import { Input } from '../ui/Input';
import { PhoneInput } from '../ui/PhoneInput';
import { Typography } from '../ui/Typography';
import { Form } from './Form';
import { cn } from '@/lib/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const Schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email('Enter a valid email address').required('Email address is required').required(),
  phoneNumber: yup.string().required(),
});

type FormValues = {
  email: string;
  fullName: string;
  phoneNumber: string;
};

type RegisterFormProps = {
  className?: string;
};

export const RegisterForm = ({ className }: RegisterFormProps) => {
  const [phone, setPhone] = useState('');

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(Schema),
    defaultValues: { email: '', fullName: '', phoneNumber: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className={cn(`w-full max-w-[495px]`, className)}>
      <Typography className="text-center lg:text-left">Leave a request now and get 20% off!</Typography>
      <Heading className="text-center lg:text-left text-[2rem] md:text-[2.875rem] mb-10" variant="h3">
        Register for the course
      </Heading>
      <Form buttonLabel="Join the course" onSubmit={handleSubmit(onSubmit)} className="flex-col gap-y-10" buttonClasses="text-nowrap py-[0.78rem] w-full">
        <div className=" w-full flex flex-col gap-y-10 justify-start items-start">
          <Input
            className="w-full max-w-[495px] border-white rounded text-gray600"
            name="fullName"
            control={control}
            inputStyles={{
              height: 44,
              paddingTop: 4,
              fontSize: '0.85rem',
              paddingBottom: '2px',
              color: '#9a9ca5',
              backgroundColor: 'rgb(255, 255, 255)',
              border: errors.email?.message ? '1px solid #d32f2f' : '1px solid rgb(215, 218, 221)',
            }}
            labelStyles={{ fontSize: '1rem', color: errors.email?.message ? '#d32f2f' : '#9a9ca5' }}
            helperStyles={{ position: 'absolute', bottom: '-24px', left: '0' }}
            label="Enter you full name"
            type="text"
          />
          <Input
            className="w-full max-w-[495px] border-white rounded text-gray600"
            name="email"
            control={control}
            inputStyles={{
              height: 44,
              paddingTop: 4,
              fontSize: '0.85rem',
              paddingBottom: '2px',
              color: '#9a9ca5',
              backgroundColor: 'rgb(255, 255, 255)',
              border: errors.email?.message ? '1px solid #d32f2f' : '1px solid rgb(215, 218, 221)',
            }}
            labelStyles={{ fontSize: '1rem', color: errors.email?.message ? '#d32f2f' : '#9a9ca5' }}
            helperStyles={{ position: 'absolute', bottom: '-24px', left: '0' }}
            label="Email address"
            type="email"
          />
          <PhoneInput
            backgroundColor="white"
            name="phoneNumber"
            className="w-full max-w-[495px] h-[52px] bg-white"
            control={control}
            onChange={(phone) => setPhone(phone)}
            value={phone}
            height="30px"
          />
        </div>
      </Form>
    </div>
  );
};
