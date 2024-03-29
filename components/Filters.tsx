import { Search } from './common/Search';
import { BaseSelect } from './ui/BaseSelect';
import React from 'react';

export const Filters = () => {
  return (
    <div className="flex justify-between items-center">
      <BaseSelect text="Event category" />
      <BaseSelect text="Sort by" />
      <BaseSelect text="Show" />
      {/* <Search /> */}
    </div>
  );
};
