import { SignUpForm } from '../forms/SignUpForm';
import { AppDialog } from './AppDialog';
import React from 'react';

type SignUpDialogProps = {
  open: boolean;
  close: () => void;
};
export const SignUpDialog: React.FC<SignUpDialogProps> = ({ open, close }) => {
  return (
    <AppDialog onClose={close} open={open}>
      <SignUpForm />
    </AppDialog>
  );
};
