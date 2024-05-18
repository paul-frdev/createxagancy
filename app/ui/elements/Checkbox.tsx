import { cn } from '@/app/lib/utils';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import * as React from 'react';

type CheckboxLabelsProps = {
  label?: string;
  className?: string;
};

export const CheckboxLabels: React.FC<CheckboxLabelsProps> = ({ label, className }) => {
  return (
    <FormGroup className={cn(`text-gray800 font-latoRegular font-[400] text-[0.875rem]`, className)}>
      <FormControlLabel
        control={<Checkbox className="text-orange w-4 h-4 ml-[10px]" size="small" />}
        label={label}
        className="flex justify-start items-center gap-x-2 !text-gray800 !font-latoRegular !font-[400] !text-[0.875rem]"
      />
    </FormGroup>
  );
};
