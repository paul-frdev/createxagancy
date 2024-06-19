'use client';

import { Certificate } from '../Certificate';
import { Reviews } from '../Reviews';
import { Subscribe } from '../Subscribe';
import { Video } from '../Video';
import { Posts } from '../posts/Posts';
import { Benefits } from './Benefits';
import { Courses } from './Courses';
import { Statistics } from './Statistics';
import { Team } from './Team';
import { WhyCreatex } from './WhyCreatex';
import { Workshops } from './Workshops';
import { useMyContext } from '@/context/useContextMenu';
import { PostType, ReviewsType } from '@/types';
import { CourseType } from '@/types/courses';
import { Team as TeamType } from '@/types/team';
import { WorkshopPreview } from '@/types/workshop';
import React from 'react';

type LandingProps = {
  events: WorkshopPreview[];
  team: TeamType[];
  reviews: ReviewsType[];
  posts: PostType[];
  courses: CourseType[];
};
export const Landing = ({ events, team, reviews, posts, courses }: LandingProps) => {
  const { showVideo } = useMyContext();
  return (
    <>
      <Statistics />
      <WhyCreatex />
      <Courses courses={courses} />
      <Benefits />
      <Workshops workshops={events} />
      <Certificate />
      <Team items={team} />
      <Reviews items={reviews} />
      <Posts items={posts} />
      <Subscribe />
      {showVideo ? <Video videoId="https://youtu.be/8oON21G1Bqg?si=Frq0BUaNg6fcrBsy" /> : null}
    </>
  );
};
