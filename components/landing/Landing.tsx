'use client'
import React from 'react'
import { Statistics } from './Statistics'
import { WhyCreatex } from './WhyCreatex'
import { Courses } from './Courses'
import { Benefits } from './Benefits'
import { Workshops } from './Workshops'
import { WorkshopPreview } from '@/types/workshop'
import { Certificate } from './Certificate'
import { Team } from './Team'
import { Team as TeamType } from '@/types/team'
import { Reviews } from './Reviews'
import { PostsType, ReviewsType } from '@/types'
import { Posts } from './Posts'
import { Subscribe } from './Subscribe'
import { useMyContext } from '@/context/useContextMenu'
import { Video } from '../Video'

type LandingProps = {
  workshops: WorkshopPreview[];
  team: TeamType[];
  reviews: ReviewsType[];
  posts: PostsType[]
}
export const Landing = ({ workshops, team, reviews, posts }: LandingProps) => {

  const { showVideo } = useMyContext()
  return (
    <>
      <Statistics />
      <WhyCreatex />
      <Courses />
      <Benefits />
      <Workshops workshops={workshops} />
      <Certificate />
      <Team items={team} />
      <Reviews items={reviews} />
      <Posts items={posts} />
      <Subscribe />
      {showVideo ? <Video videoId='https://youtu.be/8oON21G1Bqg?si=Frq0BUaNg6fcrBsy' /> : null}
    </>
  )
}
