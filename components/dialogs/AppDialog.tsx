import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

export interface SimpleDialogProps {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const AppDialog = (props: SimpleDialogProps) => {
  const { onClose, children, open, title } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
