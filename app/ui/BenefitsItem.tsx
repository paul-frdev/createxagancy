import { Container } from '../../app/ui/elements/Container';
import { Heading } from '../../app/ui/elements/Heading';
import { Image } from '../../app/ui/elements/Image';
import { Typography } from '../../app/ui/elements/Typography';
import check from '/public/svg/check.svg';
import React from 'react';

type BenefitItemProps = {
  subtitle: string;
  title: string;
  list: { id: number; text: string }[];
};
export const BenefitsItem: React.FC<BenefitItemProps> = ({ title, subtitle, list }) => {
  return (
    <section className="w-full">
      <Container className="mb-16 lg:mb-32">
        <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:items-start">
          <div className="w-full lg:max-w-[492px] -mt-14">
            <Typography className="text-center lg:text-left">{subtitle}</Typography>
            <Heading className="text-center lg:text-left text-[2rem] md:text-[2.875rem]">{title}</Heading>
          </div>
          <div className="flex flex-col w-full max-w-[600px] gap-y-[1.25rem] ">
            {list.map((item) => (
              <div key={item.id} className="flex justify-start items-start gap-x-2">
                <div className="w-6 h-6 flex justify-start items-start text-gray800">
                  <Image className="w-[18px] mt-[5px] h-[18px]" src={check} alt="check" />
                </div>
                <span className=" w-full text-[1rem] font-lato font-normal leading-[140%]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
