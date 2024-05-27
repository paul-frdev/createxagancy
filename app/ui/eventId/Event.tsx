import { AboutEvent } from './AboutEvent';
import { Author } from './Author';
import { Benefits } from './Benefits';
import { PreviewEvent } from './PreviewEvent';
import { Request } from './Request';
import { Subscribe } from './Subscribe';
import { YouMayLike } from './YouMayLike';
import { IEvent } from '@/types/events';
import { WorkshopPreview } from '@/types/workshop';
import React from 'react';

type EventProps = {
  event: IEvent;
  events: WorkshopPreview[];
};
export const Event = ({ event, events }: EventProps) => {
  return (
    <>
      <AboutEvent />
      <PreviewEvent event={event} />
      <Author links={event.socialLinks} />
      <Benefits />
      <Subscribe />
      <Request />
      <YouMayLike events={events} />
    </>
  );
};
