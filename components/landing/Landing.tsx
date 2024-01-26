import React from 'react'
import { Info } from './Info'
import { Statistics } from './Statistics'
import { WhyCreatex } from './WhyCreatex'
import { Courses } from './Courses'
import { Benefits } from './Benefits'
import { Workshops } from './Workshops'
import { WorkshopPreview } from '@/types/workshop'

type LandingProps = {
  workshops: WorkshopPreview[]
}
export const Landing = ({ workshops }: LandingProps) => {
  return (
    <>
      <Info />
      <Statistics />
      <WhyCreatex />
      <Courses />
      <Benefits />
      <Workshops workshops={workshops} />
    </>
  )
}
