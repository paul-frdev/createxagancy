import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Typography } from '../ui/Typography';
import { WorkshopCard } from '../ui/WorkshopCard';
import { WorkshopPreview } from '@/types/workshop';
import React from 'react';

type WorkshopsProps = {
  workshops: WorkshopPreview[];
};
export const Workshops: React.FC<WorkshopsProps> = ({ workshops }) => {
  return (
    <section className="my-8 w-full relative bg-orange02 pt-10 mb-8">
      <Container className="mb-16">
        <div className="flex flex-col justify-center items-center">
          <Typography>Our Events</Typography>
          <Heading variant="h5" className="text-center lg:text-left text-[2.2rem] md:text-[2.875rem] mb-12">
            Lectures & workshops
          </Heading>
        </div>
        {workshops.slice(0, 3).map((item) => (
          <WorkshopCard item={item} key={item.id} />
        ))}
        <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 justify-center items-center gap-x-[2.5rem] mt-[4rem]">
          <Heading className="text-[1.75rem] mb-0">Do you want more?</Heading>
          <Button sizeCss="lg" className="px-[2rem] text-base hover:bg-orange02 border-transparent hover:border-orange flex justify-center items-center py-0 h-[52px]">
            Explore all events
          </Button>
        </div>
      </Container>
    </section>
  );
};
