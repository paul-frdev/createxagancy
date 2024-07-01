'use client';

import { Typography } from './Typography';
import { cn } from '@/app/lib/utils';
import { useQueryParams } from '@/hooks/useQueryParams';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useEffect, useState } from 'react';

type BaseSelectProps = {
  text?: string;
  className?: string;
  items: React.ReactNode[];
  description?: string;
  query: string;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const selectStyles = {
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#e0e0e0',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#bdbdbd',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#2196f3',
    borderWidth: '2px',
  },
  '&..mui-6hp17o-MuiList-root-MuiMenu-list': {
    width: '200px',
  },
  '& .MuiSelect-select': {
    padding: '10px 14px',
    fontSize: '1rem',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 400,
    width: '150px',
  },
};

const menuItemStyles = {
  fontSize: '1rem',
  fontFamily: 'Lato, sans-serif',
  fontWeight: 400,
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
  '&.Mui-selected': {
    backgroundColor: '#e3f2fd',
    '&:hover': {
      backgroundColor: '#bbdefb',
    },
  },
};

export const BaseSelect: React.FC<BaseSelectProps> = ({ text = '', className, items, description, query }) => {
  const [value, setValue] = useState('');
  const { setQueryParams } = useQueryParams();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    const newValue = event.target.value as string;
    setValue(newValue);
    setQueryParams(query, newValue);
  };

  useEffect(() => {
    if (query === 'count') {
      setQueryParams(query, '6');
    } else {
      setQueryParams(query, 'All');
    }
  }, []);

  return (
    <div className={cn(`flex justify-center items-center gap-x-2`, className)}>
      {text && <Typography className="hidden lg:block normal-case text-base font-latoBlack font-[700] leading-[160%] text-nowrap mb-0">{text}</Typography>}
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          sx={selectStyles}
          style={{ width: typeof items[0] === 'number' ? 70 : 160 }}
          renderValue={(selected) => {
            if ((selected as string).length === 0) {
              return <p className="text-[1rem] normal-case font-latoRegular font-[400]">{items[0]}</p>;
            }
            return selected as React.ReactNode;
          }}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 170,
              },
            },
          }}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {items.map((item, index) => (
            <MenuItem value={item as string} key={index} sx={menuItemStyles}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {description && <Typography className="hidden lg:block normal-case text-[0.875rem] font-latoRegular font-[400] leading-[160%] text-nowrap mb-0">{description}</Typography>}
    </div>
  );
};
