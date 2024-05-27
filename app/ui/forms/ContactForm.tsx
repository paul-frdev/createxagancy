import { CheckboxLabels } from '../elements/Checkbox';
import { Container } from '../elements/Container';
import { Image } from '../elements/Image';
import { Input } from '../elements/Input';
import { PhoneInput } from '../elements/PhoneInput';
import { Form } from './Form';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

const Schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email('Enter a valid email address').required('Email address is required').required(),
  phoneNumber: yup.string().required(),
  message: yup.string().required(),
});

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
};

export const ContactForm = () => {
  const [phone, setPhone] = useState('');

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(Schema),
    defaultValues: { firstName: '', lastName: '', email: '', phoneNumber: '', message: '' },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container className="my-8 py-8 flex justify-between items-center">
      <div>
        <Image src="/contacts/dropline.svg" alt="contact" className="w-full max-w-[435px] h-[481px]" />
      </div>
      <Form buttonLabel="Send message" buttonClasses="w-[300px]" className="w-full max-w-[705px] flex flex-col gap-x-4  gap-y-6 justify-between" onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full flex justify-between items-center">
          <Input
            className="w-full max-w-[344px] border-white rounded text-gray600"
            name="firstName"
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
            label="Enter you first name"
            type="text"
          />
          <Input
            className="w-full max-w-[344px] border-white rounded text-gray600"
            name="lastName"
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
            label="Enter you last name"
            type="text"
          />
        </div>
        <div className=" w-full flex justify-between items-center">
          <Input
            className="w-full border-white max-w-[344px] rounded text-gray600"
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
          <PhoneInput height="20px" name="phoneNumber" className="w-full max-w-[344px]" control={control} onChange={(phone) => setPhone(phone)} value={phone} />
        </div>
        <Input
          multiline={true}
          fullWidth={true}
          maxRows={100}
          className="w-full max-w-[705px] border-white rounded text-gray600"
          name="message"
          control={control}
          inputStyles={{
            height: 170,
            padding: '5px 10px',
            fontSize: '1rem',
            color: '#9a9ca5',
            backgroundColor: 'white',
            transition: 'background-color white',
            border: errors.email?.message ? '1px solid #d32f2f' : '1px solid rgb(215, 218, 221)',
          }}
          labelStyles={{ fontSize: '0.75rem', color: errors.email?.message ? '#d32f2f' : '#9a9ca5' }}
          helperStyles={{ position: 'absolute', bottom: '-24px', left: '0' }}
          label="Enter a message"
          type="textarea"
        />
        <CheckboxLabels label="I agree to receive communications from Createx Online School" className="mb-4 mr-auto" />
      </Form>
    </Container>
  );
};
