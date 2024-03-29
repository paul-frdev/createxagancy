'use client';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { TextField, useTheme } from '@mui/material';
import React, { useState } from 'react';
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
  ariaLabel?: string;
  inputStyles?: React.CSSProperties;
  labelStyles?: React.CSSProperties;
  helperStyles?: React.CSSProperties;
}

export const Input: React.FC<TextInputProps> = ({
  name,
  control,
  label,
  className,
  type = 'text',
  ariaLabel,
  fullWidth = false,
  inputStyles,
  labelStyles,
  helperStyles,
  ...rest
}) => {
  const theme = useTheme();
  const [isPassword, setIsPassword] = useState(false);

  return (
    <div className="w-full relative">
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            aria-label={ariaLabel}
            onClick={() => setIsPassword(isPassword!)}
            inputProps={{ style: inputStyles }}
            InputLabelProps={{ style: labelStyles }}
            type={isPassword ? 'text' : type}
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
      {!isPassword && type === 'password' && (
        <VisibilityIcon onClick={() => setIsPassword(!isPassword)} className="absolute right-[14px] top-[34%] text-gray800 cursor-pointer hover:text-orange text-gray800 w-4 h-4" />
      )}
      {isPassword && ariaLabel === 'password' && (
        <VisibilityOffIcon
          onClick={() => setIsPassword(!isPassword)}
          className="absolute right-[14px] top-[34%] text-gray800 cursor-pointer hover:text-orange text-gray800 w-4 h-4"
        />
      )}
    </div>
  );
};
