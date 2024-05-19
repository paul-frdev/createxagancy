import { Head } from '../Head';
import { TeamItem } from '../TeamItem';
import { Container } from '../elements/Container';
import { Team as TeamType } from '@/types/team';
import React from 'react';

type ITeam = {
  members: TeamType[];
};
export const Team: React.FC<ITeam> = ({ members }) => {
  return (
    <section className=" w-full my-10">
      <Container className=" py-10">
        <Head text="Best tutors are all here" title="Meet our team" />
        <div className=" grid grid-cols-4 justify-between items-center gap-y-6">
          {members.map((item) => (
            <TeamItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
