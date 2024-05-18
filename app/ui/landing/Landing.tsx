'use client';

import { Video } from '../Video';
import { Subscribe } from '../Subscribe';
import { Benefits } from './Benefits';
import { Courses } from './Courses';
import { Posts } from './Posts';
import { Statistics } from './Statistics';
import { Team } from './Team';
import { WhyCreatex } from './WhyCreatex';
import { Workshops } from './Workshops';
import { useMyContext } from '@/context/useContextMenu';
import { PostsType, ReviewsType } from '@/types';
import { Team as TeamType } from '@/types/team';
import { WorkshopPreview } from '@/types/workshop';
import React from 'react';
import { CourseType } from '@/types/courses';
import { Certificate } from '../Certificate';
import { Reviews } from '../reviews/Reviews';

type LandingProps = {
  events: WorkshopPreview[];
  team: TeamType[];
  reviews: ReviewsType[];
  posts: PostsType[];
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
