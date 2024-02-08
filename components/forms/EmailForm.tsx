'use client'
import React from 'react'
import { Form } from './Form'
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from '../ui/Input';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


type FormValues = {
  email: string;
}

const Schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email address is required"),
});


export const EmailForm = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(Schema),
    defaultValues: { email: "" }
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset()
  };


  return (
    <Form
      className='justify-center relative w-full'
      buttonLabel=""
      icon={<ArrowForwardIcon />}
      buttonClasses='absolute -top-[15%] right-[1px] bg-transparent hover:bg-transparent hover:text-orange hover:border-transparent p-4'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className='w-full max-w-[286px] border-transparent rounded text-white'
        name="email"
        control={control}
        inputStyles={{ height: 36, paddingTop: 4, fontSize: '0.85rem', paddingBottom: '2px', color: "#fff", backgroundColor: 'rgba(255, 255, 255, 0.12)', border: errors.email?.message ? '1px solid #d32f2f' : '1px solid rgba(255, 255, 255, 0.2)' }}
        labelStyles={{ fontSize: '0.75rem', color: errors.email?.message ? "#d32f2f" : '#fff' }}
        helperStyles={{ position: 'absolute', bottom: '-24px', left: '0' }}
        label="Email address"
        type='email'
      />
    </Form>
  )
}
