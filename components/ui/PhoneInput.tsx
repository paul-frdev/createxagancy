import { BaseTextFieldProps, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';
import { CountryIso2, FlagImage, defaultCountries, parseCountry, usePhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

export interface MUIPhoneProps extends BaseTextFieldProps {
  value: string;
  onChange: (phone: string) => void;
  name: string;
  control: any;
  className?: string;
  height?: string;
  backgroundColor?: string;
}

export const PhoneInput: React.FC<MUIPhoneProps> = ({ value, onChange, name, control, className, height, backgroundColor, ...restProps }) => {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } = usePhoneInput({
    defaultCountry: 'us',
    value,
    countries: defaultCountries,
    onChange: (data) => {
      onChange(data.phone);
    },
  });

  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      className={className}
      name={name}
      variant="outlined"
      label="Phone number"
      color="primary"
      placeholder="Phone number"
      value={inputValue}
      onChange={handlePhoneValueChange}
      type="tel"
      inputProps={{ style: { padding: '11px 10px 11px 10px', outline: 'none', height: height, backgroundColor: backgroundColor } }}
      InputLabelProps={{ shrink: false, style: { display: 'none' } }}
      inputRef={inputRef}
      InputProps={{
        style: { backgroundColor: backgroundColor },
        startAdornment: (
          <InputAdornment position="start" style={{ marginRight: '2px', marginLeft: '-8px' }}>
            <Select
              MenuProps={{
                style: {
                  height: '300px',
                  width: '360px',
                  top: '10px',
                  left: '-34px',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
              }}
              sx={{
                width: 'max-content',
                fieldset: {
                  display: 'none',
                },
                '&.Mui-focused:has(div[aria-expanded="false"])': {
                  fieldset: {
                    display: 'block',
                  },
                },
                '.MuiSelect-select': {
                  padding: '8px',
                  paddingRight: '24px !important',
                },
                svg: {
                  right: 0,
                },
              }}
              value={country.iso2}
              onChange={(e) => setCountry(e.target.value as CountryIso2)}
              renderValue={(value) => <FlagImage iso2={value} style={{ display: 'flex' }} />}
            >
              {defaultCountries.map((c) => {
                const country = parseCountry(c);
                return (
                  <MenuItem key={country.iso2} value={country.iso2}>
                    <FlagImage iso2={country.iso2} style={{ marginRight: '8px' }} />
                    <Typography marginRight="8px">{country.name}</Typography>
                    <Typography color="gray">+{country.dialCode}</Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      }}
      {...restProps}
    />
  );
};
