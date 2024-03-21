import { DialogContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
import { Button } from '../ui/Button';
import CloseIcon from '@mui/icons-material/Close';

export interface SimpleDialogProps {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
}

export const AppDialog = (props: SimpleDialogProps) => {
  const { onClose, children, open, title, className } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} className={className}>
      <div className='flex justify-end items-center px-2 pt-4'>
        <Button className='w-fit border-none bg-transparent p-2 text-gray700 hover:text-white hover:border-none hover:bg-orange p-0 w-[42px] h-[42px] rounded-full'>
          <CloseIcon className='w-6 h-6' />
        </Button>
      </div>
      <DialogTitle className='mx-auto text-gray900 text-[1.75rem] font-latoBlack font-[900]'>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
