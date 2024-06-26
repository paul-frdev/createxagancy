'use client';

import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


const libraries = ['places', 'drawing', 'geometry'];

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
    libraries: libraries as Libraries,
  });

  const isTablet = useMediaQuery('(max-width: 720px)');

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return (
    <Stack spacing={1}>
      <Skeleton variant="rounded" width={isTablet ? 300 : 702} height={isTablet ? 370 : 412} className=' rounded' />
    </Stack>
  );

  return children;
}
