'use client';

import { cn } from '../lib/utils';
import { Search } from './Search';
import { BaseSelect } from './elements/BaseSelect';
import { Button } from './elements/Button';
import { showItems, sortBy, themes } from '@/constants';
import { WorkshopPreview } from '@/types/workshop';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import WindowIcon from '@mui/icons-material/Window';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

type FiltersProps = {
  setStyled: (str: string) => void;
  styled: string;
  events: WorkshopPreview[];
  setParams: (key: string, value: string | number) => void;
  setTopic?: (term: string) => void;
  setSort?: (term: string) => void;
  setCount?: (term: string) => void;
};
export const Filters: React.FC<FiltersProps> = ({ setStyled, styled, events, setParams, setTopic, setSort, setCount }) => {
  const handleSearchInputChange = useDebouncedCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setParams('query', term);
  }, 500);

  return (
    <div className="flex justify-start items-center gap-x-[2.5rem] mb-8">
      <BaseSelect text="Event category" items={themes} setQuery={setTopic} />
      <BaseSelect text="Sort by" items={sortBy} setQuery={setSort} />
      <BaseSelect text="Show" items={showItems} description="events per page" setQuery={setCount} />
      {/* <Search
      className='w-[282px]'
        items={events}
        handleSearchInputChange={handleSearchInputChange}
        searchParams={searchParams.get('query')?.toString()}
      /> */}
      <div className="flex justify-end items-end flex-nowrap gap-x-2">
        <Button
          onClick={() => setStyled('flex')}
          className={cn(
            ` w-fit bg-transparent hover:bg-transparent border-none hover:border-none  p-0 justify-end`,
            styled === 'flex' ? 'text-orange hover:text-gray800' : 'text-gray800 hover:text-orange'
          )}
        >
          <ViewAgendaIcon className=" w-6 h-6" />
        </Button>
        <Button
          onClick={() => setStyled('grid')}
          className={cn(
            ` w-fit justify-end bg-transparent hover:bg-transparent text-gray800 border-none hover:border-none p-0`,
            styled === 'grid' ? 'text-orange hover:text-gray800' : 'text-gray800 hover:text-orange'
          )}
        >
          <WindowIcon className=" w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
