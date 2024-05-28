import { SvgIconComponent } from '@mui/icons-material';
import BaseTab from '@mui/material/Tab';
import React from 'react';

type TabProps = {
  icon: SvgIconComponent;
  label: string;
  value: string;
};
export const Tab: React.FC<TabProps> = ({ icon: Icon, label, value }) => {
  return (
    <BaseTab
      className="flex flex-row w-full max-w-[307px] text-gray600 rounded justify-center items-center gap-x-[0.5rem] p-0 text-base font-lato font-bold min-h-[46px]"
      icon={<Icon />}
      label={label}
      value={value}
    />
  );
};
