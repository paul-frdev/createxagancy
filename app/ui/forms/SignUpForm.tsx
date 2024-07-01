import { AuthSocialMedia } from '../AuthSocialMedia';
import { Button } from '../elements/Button';
import { CheckboxLabels } from '../elements/Checkbox';
import { Input } from '../elements/Input';
import { Typography } from '../elements/Typography';
import { Form } from './Form';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const Schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().email('Enter a valid email address').required('Email address is required').required(),
  password: yup.string().required(),
  repeatPassword: yup
    .string()
    .required()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value;
    }),
});

type FormValues = {
  email: string;
  fullName: string;
  password: string;
  repeatPassword: string;
};

export const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(Schema) as any,
    defaultValues: { email: '', fullName: '', password: '', repeatPassword: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    reset();
  };

  return (
    <div className="w-full max-w-[390px] mx-auto mx-4">
      <Typography className=" text-gray700 text-[0.85rem] mb-8 normal-case text-center">
        Registration takes less than a minute but gives you full control over your studying.
      </Typography>
      <Form
        className="flex-col  gap-y-4 items-center border-b border-b-solid border-b-gray300"
        buttonLabel="Sign Up"
        onSubmit={handleSubmit(onSubmit)}
        buttonClasses="text-nowrap py-[0.55rem] w-full mx-auto mb-4 hover:bg-transparent"
      >
        <div className="flex flex-col  justify-between items-center gap-y-8 w-full">
          <Input
            className="w-full border-white rounded text-gray600"
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
            helperStyles={{ position: 'absolute', bottom: '-24px', left: '-12px' }}
            label="Enter you full name"
            type="text"
          />
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
            label="email"
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
          <Input
            className="w-full border-white rounded text-gray600"
            name="repeatPassword"
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
            label="repeat password"
            type="password"
          />
          <CheckboxLabels label="Remember me" className="mb-4 mr-auto" />
        </div>
      </Form>
      <div className="flex justify-start items-center">
        <p className="text-[0.88rem] font-lato font-normal">Already have an account?</p>
        <Button href="/" className="text-orange bg-transparent border-none hover:text-orange hover:border-none hover:bg-transparent p-0 w-fit underline">
          Sign in
        </Button>
      </div>
      <AuthSocialMedia title="Or sign in with" />
    </div>
  );
};
