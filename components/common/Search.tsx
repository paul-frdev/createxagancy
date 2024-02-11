'use client'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { CourseType } from '@/types';

type SearchProps = {
  items: CourseType[]
  searchQuery: string;
  handleSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}
export const Search: React.FC<SearchProps> = ({ items, searchQuery, handleSearchInputChange, label = 'Search...' }) => {

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
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
}
