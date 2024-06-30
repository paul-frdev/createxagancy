'use client';

import { cn } from '../lib/utils';
import { BaseSelect } from './elements/BaseSelect';
import { Button } from './elements/Button';
import { showItems, sortBy, themes } from '@/constants';
import { useQueryParams } from '@/hooks/useQueryParams';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import WindowIcon from '@mui/icons-material/Window';
import React from 'react';


export const Filters = ({ currentStyle }: { currentStyle: string }) => {

  const { setQueryParams } = useQueryParams()

  return (
    <div className="flex justify-start items-start sm:items-center gap-x-4 sm:gap-x-8 mb-8">
      <div className='flex flex-col sm:flex-row gap-y-3 justify-start items-start sm:items-center gap-x-4 sm:gap-x-8'>
        <BaseSelect query='topic' text="Event category" items={themes} />
        <BaseSelect query='filter' text="Sort by" items={sortBy} />
        <BaseSelect query='count' text="Show" items={showItems} description="events per page" />
      </div>
      <div className="flex justify-start sm:justify-end items-start  sm:items-end flex-nowrap gap-x-2 w-[100px] xsm:w-[136px]">
        <Button
          onClick={() => setQueryParams('style', 'flex')}
          className={cn(
            ` w-fit bg-transparent hover:bg-transparent border-none hover:border-none  p-0 justify-start sm:justify-end`,
            currentStyle === 'flex' ? 'text-orange hover:text-gray800' : 'text-gray800 hover:text-orange'
          )}
        >
          <ViewAgendaIcon className=" w-6 h-6" />
        </Button>
        <Button
          onClick={() => setQueryParams('style', 'grid')}
          className={cn(
            ` w-fit justify-start sm:justify-end bg-transparent hover:bg-transparent text-gray800 border-none hover:border-none p-0`,
            currentStyle === 'grid' ? 'text-orange hover:text-gray800' : 'text-gray800 hover:text-orange'
          )}
        >
          <WindowIcon className=" w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};
