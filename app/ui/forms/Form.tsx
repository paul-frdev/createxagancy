import { Button } from '../elements/Button';
import { cn } from '@/app/lib/utils';
import React from 'react';
import { SubmitHandler, UseFormHandleSubmit, useForm } from 'react-hook-form';

export interface IFormProps {
  defaultValues?: Record<string, any>;
  children?: React.ReactNode;
  buttonLabel?: string;
  onSubmit: SubmitHandler<any>;
  className?: string;
  buttonClasses?: string;
  icon?: React.ReactElement;
}

export const Form: React.FC<IFormProps> = ({ onSubmit, defaultValues, children, buttonLabel, className, buttonClasses, icon, ...rest }) => {
  const { handleSubmit: handleFormSubmit } = useForm({ defaultValues });

  return (
    <form onSubmit={handleFormSubmit(onSubmit)} {...rest} className={cn(`flex justify-start items-start gap-x-3`, className)}>
      {children}
      <Button icon={icon} sizeCss="lg" className={cn(`border-transparent hover:bg-orange02 hover:border-orange`, buttonClasses)} type="submit">
        {buttonLabel}
      </Button>
    </form>
  );
};
