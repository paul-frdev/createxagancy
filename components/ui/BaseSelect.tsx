'use client';

import { Typography } from './Typography';
import { cn } from '@/lib/utils';
import { createTheme } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

type BaseSelectProps = {
  text?: string;
  className?: string;
  items?: React.ReactNode[];
  description?: string;
  setQuery: (event: string) => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const theme = createTheme({});

export const BaseSelect: React.FC<BaseSelectProps> = ({ text = '', className, items, description, setQuery }) => {
  const [value, setValue] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    setQuery(event.target.value);
  };

  return (
    <div className={cn(`flex justify-center items-center gap-x-2`, className)}>
      <Typography className=" normal-case text-base font-latoBlack font-[700] leading-[160%] text-nowrap mb-0">{text}</Typography>
      <FormControl fullWidth>
        <Select
          displayEmpty
          style={{ width: typeof items![0] === 'number' ? 70 : 160 }}
          value={value}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <p className="text-[1rem] normal-case font-latoRegular font-[400]">{items![0]}</p>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {items?.map((item, index) => (
            <MenuItem value={item as any} key={index} className="text-[1rem] normal-case font-latoRegular font-[400]">
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {description && <Typography className="normal-case text-[0.875rem] font-latoRegular font-[400] leading-[160%] text-nowrap mb-0">{description}</Typography>}
    </div>
  );
};
