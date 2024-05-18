import { cn } from '@/app/lib/utils';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react';

type TextInputProps = {
  className?: string;
} & TextFieldProps;
export const TextInput: React.FC<TextInputProps> = ({ className, ...props }) => {
  return (
    <TextField
      className={cn(``, className)}
      label="Required"
      defaultValue=""
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
};
