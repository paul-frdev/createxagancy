import React from 'react'
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { cn } from '@/lib/utils';

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
  )
}
