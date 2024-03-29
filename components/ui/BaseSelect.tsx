'use client';

import { Typography } from './Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

type BaseSelectProps = {
  text?: string;
  className?: string;
  items?: React.ReactNode[];
};
export const BaseSelect: React.FC<BaseSelectProps> = ({ text = '', className, items }) => {
  const [value, seValue] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    console.log('event.target.value', event.target.value);
  };

  return (
    <div className="flex justify-start justify-center">
      <Typography>{text}</Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={value} label="Age" onChange={handleChange}>
          {items?.map((item, index) => (
            <MenuItem value={10} key={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
