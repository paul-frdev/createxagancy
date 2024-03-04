import { Digit } from '../ui/Digit';
import React from 'react';
import { useTimer } from 'react-timer-hook';

type TimerProps = {
  expiryTimestamp: Date;
};
export const Timer: React.FC<TimerProps> = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div className="flex max-w-[182px] w-full justify-between items-center gap-x-6">
      <Digit value={days} title="days" />
      <Digit value={hours} title="hours" />
      <Digit value={minutes} title="Mins" />
      <Digit value={seconds} title="Sec" />
    </div>
  );
};
