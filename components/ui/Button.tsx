import { cn } from '@/lib/utils';
import BaseButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import React, { Ref, forwardRef } from 'react';

const variantCss = {
  default:
    'bg-orange text-white hover:text-orange hover:bg-white hover:border hover:border-outline hover:border-solid hover:bg-white border border-outline border-solid hover:bg-white',
  outline: 'bg-white text-orange hover:text-white hover:bg-orange border border-solid border-orange',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  ghost: 'bg-gray text-black hover:bg-white hover:border hover:border-solid hover:border-gray',
  link: 'text-primary underline-offset-4 hover:underline',
};

const sizeCss = {
  default: 'w-[180px] px-[2.5em] py-3 text-base',
  lg: ' px-[2.5em] py-[0.8em] text-base',
  md: 'w-[166px] px-[2.5em] py-[0.8em] text-sm',
  sm: 'w-[123px] px-[2.5em] py-[0.5em] text-[0.75em]',
  icon: 'h-10 w-10',
};

type ButtonProps = {
  children?: React.ReactNode;
  icon?: React.ReactElement;
  className?: string;
  variantCss?: keyof typeof variantCss;
  sizeCss?: keyof typeof sizeCss;
} & MuiButtonProps;

export const Button = forwardRef(
  ({ children, icon: Icon, className, onClick, sizeCss: propSizeCss = 'default', variantCss: propVariantCss = 'default', ...props }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const appliedVariantCss = propVariantCss ? variantCss[propVariantCss] : variantCss.default;
    const appliedSizeCss = propSizeCss ? sizeCss[propSizeCss] : sizeCss.default;
    const commonProps = {
      className: cn(
        `inline-flex normal-case text-nowrap text-white items-center tracking-[0.031em] font-latoBold justify-center rounded-[4px] font-bold  `,
        appliedVariantCss,
        appliedSizeCss,
        className
      ),
      onClick,
      ref,
      ...props,
    };

    return (
      <BaseButton {...commonProps}>
        {Icon && <span className="mr-2">{Icon}</span>}
        {children}
      </BaseButton>
    );
  }
);
