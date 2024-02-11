'use client';

import { TextField, useTheme } from '@mui/material';
import React from 'react';
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
  type?: string;
  inputStyles?: React.CSSProperties;
  labelStyles?: React.CSSProperties;
  helperStyles?: React.CSSProperties;
}

export const Input: React.FC<TextInputProps> = ({ name, control, label, className, type = 'text', fullWidth = false, inputStyles, labelStyles, helperStyles, ...rest }) => {
  const theme = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          inputProps={{ style: inputStyles }}
          InputLabelProps={{ style: labelStyles }}
          type={type}
          className={className}
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          FormHelperTextProps={{ style: helperStyles }}
          sx={{
            input: {
              background: theme.palette.common.white,
              height: 26,
              borderRadius: '4px',
              border: `1px solid bg-gray`,
            },
          }}
          onChange={onChange}
          value={value}
          label={label}
          variant="filled"
          fullWidth={fullWidth}
          InputProps={{
            disableUnderline: true,
          }}
        />
      )}
    />
  );
};
