'use client'
import { TextField, useTheme } from '@mui/material';
import React from "react";
import { Controller } from 'react-hook-form';

interface TextInputProps {
  label: string | React.ReactNode;
  name: string;
  control: any;
  defaultValue?: string;
  helperText?: string;
  variant?: 'outlined' | 'standard' | 'filled';
  required?: boolean;
  error?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  maxRows?: number;
  fullWidth?: boolean;
  className?: string;
  type?: string
}

export const Input: React.FC<TextInputProps> = ({
  name,
  control,
  label,
  className,
  type = "text",
  fullWidth = false,
  ...rest
}) => {

  const theme = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type={type}
          className={className}
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          sx={{
            input: {
              background: theme.palette.common.white
            },
            '& .MuiFilledInput-root': {
              background: theme.palette.common.white,
              borderRadius: 4,
              height: 51,
              border: `1px solid bg-gray`,
              '&:hover': {
                background: theme.palette.common.white
              }
            }
          }}
          onChange={onChange}
          value={value}
          label={label}
          variant="filled"
          fullWidth={fullWidth}
          InputProps={{
            disableUnderline: true
          }}
        />
      )}
    />
  )
}
