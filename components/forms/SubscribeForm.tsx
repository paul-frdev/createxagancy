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
    .email("Enter a valid working email")
    .required("your working email is required"),
});

export const SubscribeForm = () => {

  const { register, control, handleSubmit, reset } = useForm<FormValues>({
    resolver: yupResolver(Schema),
    defaultValues: { email: "" }
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset()
  };


  return (
    <Form
      className='justify-center'
      buttonLabel="Subscribe"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        className='bg-white w-full max-w-[422px] border-transparent rounded'
        labelStyles={{ color: "#9a9ca5" }}
        inputStyles={{ color: '#9a9ca5' }}
        name="email"
        control={control}
        label="Your working email"
        type='email'
      />
    </Form>
  )
}
