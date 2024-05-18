import { cn } from '../lib/utils';
import { BaseSelect } from './elements/BaseSelect';
import { Button } from './elements/Button';
import { showItems, sortBy, themes } from '@/constants';
import ViewAgendaIcon from '@mui/icons-material/ViewAgenda';
import WindowIcon from '@mui/icons-material/Window';
import React from 'react';

type FiltersProps = {
  setTopic: (str: string) => void;
  setSortBY: (str: string) => void;
  setCount: (str: string) => void;
  setStyled: (str: string) => void;
  styled: string;
};
export const Filters: React.FC<FiltersProps> = ({ setCount, setSortBY, setStyled, setTopic, styled }) => {
  return (
    <div className="flex justify-start items-center gap-x-[2.5rem] mb-8">
      <BaseSelect text="Event category" items={themes} setQuery={setTopic} />
      <BaseSelect text="Sort by" items={sortBy} setQuery={setSortBY} />
      <BaseSelect text="Show" items={showItems} description="events per page" setQuery={setCount} />
      {/* <Search items={{} as any} /> */}
      <div>
        <Button
          onClick={() => setStyled('flex')}
          className={cn(
            `bg-transparent hover:bg-transparent border-none hover:border-none w-fit p-0`,
            styled === 'flex' ? 'text-orange hover:text-gray800' : 'text-gray800 hover:text-orange'
          )}
        >
          <ViewAgendaIcon />
        </Button>
        <Button
          onClick={() => setStyled('grid')}
          className={cn(
            `bg-transparent hover:bg-transparent text-gray800 border-none hover:border-none w-fit p-0`,
            styled === 'grid' ? 'text-orange hover:text-gray800' : 'text-gray800 hover:text-orange'
          )}
        >
          <WindowIcon />
        </Button>
      </div>
    </div>
  );
};
