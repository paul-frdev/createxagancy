'use client';

import { Button } from './elements/Button';
import { CourseType } from '@/types/courses';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

type SearchProps = {
  items: CourseType[];
  handleSearchInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
  searchParams?: string;
};

const style = {
  '& label.Mui-focused': {
    color: '#787a80',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#787a80',
      transition: 'all .3s easy',
    },
  },
};

export const Search: React.FC<SearchProps> = ({ items, searchParams, handleSearchInputChange, className, label = 'Search...' }) => {
  const [value, setValue] = React.useState('');

  return (
    <Stack spacing={2} className={className}>
      <Autocomplete
        freeSolo
        options={items}
        id="free-solo-2-demo"
        disableClearable={true}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.label}
          </li>
        )}
        renderInput={(params) => {
          const inputProps = { ...params.InputProps };
          inputProps.endAdornment = null;
          return (
            <TextField
              {...params}
              sx={style}
              defaultValue={searchParams}
              onChange={handleSearchInputChange}
              label={label}
              InputProps={{
                ...params.InputProps,

                type: 'search',
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          );
        }}
      />
    </Stack>
  );
};
