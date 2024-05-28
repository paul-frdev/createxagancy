import React from 'react';

type DigitProps = {
  value: number;
  title: string;
};
export const Digit: React.FC<DigitProps> = ({ value, title }) => {
  const leftDigit = value >= 10 ? value.toString()[0] : '0';
  const rightDigit = value >= 10 ? value.toString()[1] : value.toString();
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <div className="flex justify-start items-center gap-x-[2.5px]">
        <span className="text-[1.25rem] text-gray900 font-lato font-bold leading-[130%]">{leftDigit}</span>
        <span className="text-[1.25rem] text-gray900 font-lato font-bold leading-[130%]">{rightDigit}</span>
      </div>
      <span className="text-[0.75rem] font-lato font-normal leading-[150%]">{title}</span>
    </div>
  );
};
