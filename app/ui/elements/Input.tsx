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
  isShrink?: boolean;
}

export const Input: React.FC<TextInputProps> = ({
  name,
  control,
  label,
  className,
  type = 'text',
  ariaLabel,
  fullWidth = false,
  multiline = false,
  isShrink = false,
  maxRows,
  inputStyles,
  labelStyles,
  helperStyles,
  ...rest
}) => {
  const theme = useTheme();
  const [isPassword, setIsPassword] = useState(false);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            {...rest}
            aria-label={ariaLabel}
            inputProps={{ style: inputStyles }}
            InputLabelProps={{ style: labelStyles, shrink: isShrink }}
            type={isPassword ? 'text' : type}
            className={className}
            helperText={error ? error.message : rest.helperText}
            size="small"
            error={!!error}
            FormHelperTextProps={{ style: helperStyles }}
            sx={{
              input: {
                background: theme.palette.common.white,
                height: multiline ? 'auto' : 26,
                borderRadius: '4px',
                border: `1px solid bg-gray`,
                position: 'relative',
                paddingRight: '0px',
              },
              '& .MuiInputBase-root': {
                padding: '0px',
              },
              '& .mui-10n2iyd-MuiInputBase-root-MuiFilledInput-root': {
                padding: '0px',
              },
            }}
            onChange={onChange}
            value={value}
            label={label}
            variant="filled"
            fullWidth={fullWidth}
            multiline={multiline}
            maxRows={maxRows}
            InputProps={{
              disableUnderline: true,
              endAdornment:
                !multiline &&
                type === 'password' &&
                (isPassword ? (
                  <VisibilityOffIcon
                    onClick={() => setIsPassword(!isPassword)}
                    className="w-4 h-4 cursor-pointer absolute top-[14px] right-[10px]"
                    style={{ color: theme.palette.grey[800] }}
                  />
                ) : (
                  <VisibilityIcon
                    onClick={() => setIsPassword(!isPassword)}
                    className="w-4 h-4 cursor-pointer absolute top-[14px] right-[10px]"
                    style={{ color: theme.palette.grey[800] }}
                  />
                )),
            }}
          />
        )}
      />
    </>
  );
};
