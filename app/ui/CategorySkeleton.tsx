import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export const CategorySkeleton = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton animation="wave" height={60} width={100} />
    </Box>
  )
}
