import React from 'react'

export const Typography = ({ children }: { children: string }) => {
  return (
    <p className='text-base font-latoBold font-[700] uppercase leading-[150%] tracking-[1px] mb-4'>{children}</p>
  )
}
