import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No items found",
  message = "No items found"
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        maxWidth: 800,
        mx: 'auto',
        mt: 4,
        p: 6,
        textAlign: 'center'
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <InfoIcon className=' text-primary' sx={{ fontSize: 80, mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {message}
        </Typography>
      </Box>
    </Paper>
  );
};
