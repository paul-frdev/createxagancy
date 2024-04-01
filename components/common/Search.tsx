'use client';

import { CourseType } from '@/types';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import * as React from 'react';

type SearchProps = {
  items: CourseType[];
  searchQuery?: string;
  handleSearchInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
};
export const Search: React.FC<SearchProps> = ({ items, searchQuery, handleSearchInputChange, className, label = 'Search...' }) => {
  return (
    <Stack spacing={2} className={className}>
      <Autocomplete
        freeSolo
        options={items}
        id="free-solo-2-demo"
        disableClearable
        value={searchQuery}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
            {option.label}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={handleSearchInputChange}
            label={label}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
};
