import { LoginForm } from '../forms/LoginForm';
import { AppDialog } from './AppDialog';
import React from 'react';

type LoginDialogProps = {
  open: boolean;
  close: () => void;
};
export const LoginDialog: React.FC<LoginDialogProps> = ({ open, close }) => {
  return (
    <AppDialog open={open} onClose={close} title="Sign in">
      <LoginForm />
    </AppDialog>
  );
};
