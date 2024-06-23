import { AboutEvent } from './AboutEvent';
import { Author } from './Author';
import { Benefits } from './Benefits';
import { PreviewEvent } from './PreviewEvent';
import { Request } from './Request';
import { SubscribeItem } from '../SubscribeItem';
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
      <SubscribeItem className=' justify-evenly' maxWidth='max-w-[308px]' src='/event/subscribe.svg' title='Don’t want to miss the best events? Subscribe to our newsletter!' from='[rgba(255,63,58,.2)_0%]' to='[rgba(247,94,5,1)_100%]' />
      <Request />
      <YouMayLike events={events} />
    </>
  );
};
