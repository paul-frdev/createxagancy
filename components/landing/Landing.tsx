'use client';

import { Video } from '../Video';
import { Certificate } from '../common/Certificate';
import { Reviews } from '../common/Reviews';
import { Subscribe } from '../common/Subscribe';
import { Benefits } from './Benefits';
import { Courses } from './Courses';
import { Posts } from './Posts';
import { Statistics } from './Statistics';
import { Team } from './Team';
import { WhyCreatex } from './WhyCreatex';
import { Workshops } from './Workshops';
import { useMyContext } from '@/context/useContextMenu';
import { CourseType, PostsType, ReviewsType } from '@/types';
import { Team as TeamType } from '@/types/team';
import { WorkshopPreview } from '@/types/workshop';
import React from 'react';

type LandingProps = {
  workshops: WorkshopPreview[];
  team: TeamType[];
  reviews: ReviewsType[];
  posts: PostsType[];
  courses: CourseType[];
};
export const Landing = ({ workshops, team, reviews, posts, courses }: LandingProps) => {
  const { showVideo } = useMyContext();
  return (
    <>
      <Statistics />
      <WhyCreatex />
      <Courses courses={courses} />
      <Benefits />
      <Workshops workshops={workshops} />
      <Certificate />
      <Team items={team} />
      <Reviews items={reviews} />
      <Posts items={posts} />
      <Subscribe />
      {showVideo ? <Video videoId="https://youtu.be/8oON21G1Bqg?si=Frq0BUaNg6fcrBsy" /> : null}
    </>
  );
};
