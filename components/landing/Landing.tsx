import React from 'react'
import { Info } from './Info'
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

type LandingProps = {
  workshops: WorkshopPreview[];
  team: TeamType[];
  reviews: ReviewsType[];
  posts: PostsType[]
}
export const Landing = ({ workshops, team, reviews, posts }: LandingProps) => {
  return (
    <>
      <Info />
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
    </>
  )
}
