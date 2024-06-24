import { MainAccordion } from '../MainAccordion';
import { Outline } from '../Outline';
import { Button } from '../elements/Button';
import { Card } from '../elements/Card';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { IEvent } from '@/types/events';
import React from 'react';

type PreviewEventProps = {
  event: IEvent;
};
export const PreviewEvent: React.FC<PreviewEventProps> = ({ event }) => {
  return (
    <section className="my-5 xmd:my-10 w-full">
      <Container className="py-2 xmd:py-10 flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-between items-center">
        <div className=" w-full max-w-[600px]">
          <Heading variant="h3" className=' pl-6 text-[2.2rem] text-center md:text-left xmd:text-[2.875rem]'>We will talk about:</Heading>
          <MainAccordion items={event.faq} />
        </div>
        <Card classname="max-w-[700px] lg:max-w-[495px] w-full px-4  py-[2.5rem] xmd:px-8 border border-solid border-light shadow-xl">
          <Outline className="mb-14" title="Time" date={event.date} desc="Metus turpis sit lorem lacus, in elit tellus lacus." />
          <Outline className="mb-14" title="Price" date={event.price} desc="Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis." />
          <div className=" flex flex-col justify-center gap-y-10">
            <Button variantCss="outline" className="hover:bg-transparent border-none hover:text-gray800 uppercase text-orange" href="/link">
              Event on Facebook
            </Button>
            <Button variantCss="default" className=" w-full" href="/link">
              Join the event
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
};
