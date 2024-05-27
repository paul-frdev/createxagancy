'use client';

import { Button } from '../ui/elements/Button';
import { Heading } from '../ui/elements/Heading';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-[400px] flex justify-center flex-col items-center">
      <Heading variant="h3" className="text-center">
        Something went wrong!
      </Heading>
      <Button sizeCss="md" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
