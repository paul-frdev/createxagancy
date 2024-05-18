import { Digit } from '../elements/Digit';
import { cn } from '@/app/lib/utils';
import React from 'react';
import { useTimer } from 'react-timer-hook';

type TimerProps = {
  expiryTimestamp: Date;
  className?: string;
};
export const Timer: React.FC<TimerProps> = ({ expiryTimestamp, className }) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div className={cn(`flex max-w-[182px] w-full justify-between items-center gap-x-6`, className)}>
      <Digit value={days} title="days" />
      <Digit value={hours} title="hours" />
      <Digit value={minutes} title="Mins" />
      <Digit value={seconds} title="Sec" />
    </div>
  );
};
