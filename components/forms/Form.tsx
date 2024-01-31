import React from 'react'
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';
import { SubmitHandler, UseFormHandleSubmit, useForm } from 'react-hook-form';


export interface IFormProps {
  defaultValues?: Record<string, any>; // Use a more specific type than 'any'
  children?: React.ReactNode;
  buttonLabel?: string;
  onSubmit: SubmitHandler<any>; // Define the type for onSubmit
  handleSubmit?: UseFormHandleSubmit<any>; // Define the type for handleSubmit
  register?: any; // Consider using a more specific type if possible
  className?: string;
}

export const Form: React.FC<IFormProps> = ({ onSubmit, defaultValues, children, buttonLabel, handleSubmit, className, ...rest }) => {

  const { register: formRegister, handleSubmit: handleFormSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleFormSubmit(onSubmit)} {...rest} className={cn(`flex justify-start items-start gap-x-3`, className)}>
      {children}
      <Button sizeCss='lg' className='border-transparent hover:bg-orange02 hover:border-orange'>{buttonLabel}</Button>
    </form>
  )
}


