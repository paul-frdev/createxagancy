import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


type CheckboxLabelsProps = {
  label?: string;
  className?: string;
}
export const CheckboxLabels: React.FC<CheckboxLabelsProps> = ({ label, className }) => {
  return (
    <FormGroup className={className}>
      <FormControlLabel control={<Checkbox />} label={label} />
    </FormGroup>
  );
}