import { Timer } from '../courseItemlanding/Timer';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Input } from '../ui/Input';
import { PhoneInput } from '../ui/PhoneInput';
import { Form } from './Form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
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

export const DiscountForm = () => {
  const [phone, setPhone] = useState('');

  const time = new Date();
  time.setSeconds(time.getSeconds() + 300000);

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
    <section className="w-full mb-32">
      <Container className="bg-orange02 rounded py-12 px-[3.75rem]">
        <Stack className="flex w-full flex-row justify-between items-center mb-8">
          <Heading variant="h4" className="text-[2rem]">
            20% discount for early birds!
          </Heading>
          <Timer expiryTimestamp={time} />
        </Stack>
        <Form buttonLabel="Join the course" onSubmit={handleSubmit(onSubmit)} buttonClasses="text-nowrap py-[0.55rem]">
          <div className="flex justify-between items-center w-full">
            <Input
              className="w-full max-w-[291px] border-white rounded text-gray600"
              name="fullName"
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
              helperStyles={{ position: 'absolute', bottom: '-24px', left: '0' }}
              label="Enter you full name"
              type="text"
            />
            <Input
              className="w-full max-w-[291px] border-white rounded text-gray600"
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
              helperStyles={{ position: 'absolute', bottom: '-24px', left: '0' }}
              label="Email address"
              type="email"
            />
            <PhoneInput height="20px" name="phoneNumber" className="w-full max-w-[291px]" control={control} onChange={(phone) => setPhone(phone)} value={phone} />
          </div>
        </Form>
      </Container>
    </section>
  );
};
