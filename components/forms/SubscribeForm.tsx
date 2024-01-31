'use client'
import React from 'react'
import { Form } from './Form'
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from '../ui/Input';


type FormValues = {
  email: string;
}

const Schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export const SubscribeForm = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(Schema) });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };


  return (
    <Form
      className=' justify-center'
      buttonLabel="Subscribe"
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    >
      <Input
        className='bg-white w-full max-w-[422px] border-transparent'
        name="email"
        control={control}
        label="Enter email"
        type='email'
      />
    </Form>
  )
}
