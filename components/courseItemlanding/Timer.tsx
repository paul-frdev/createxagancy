import React from 'react';
import { useTimer } from 'react-timer-hook';
import { Digit } from '../ui/Digit';

type TimerProps = {
  expiryTimestamp: Date;
}
export const Timer: React.FC<TimerProps> = ({ expiryTimestamp }) => {

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div className='flex max-w-[182px] w-full justify-between items-center gap-x-6'>
      <Digit value={days} title='days' />
      <Digit value={hours} title='hours' />
      <Digit value={minutes} title='Mins' />
      <Digit value={seconds} title='Sec' />
    </div>
  )
}
