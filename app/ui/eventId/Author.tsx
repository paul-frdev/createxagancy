import { ILink, SocialLinks } from '../SocialLinks';
import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import { Typography } from '../elements/Typography';
import React from 'react';

type AuthorProps = {
  links: ILink[];
};
export const Author: React.FC<AuthorProps> = ({ links }) => {
  return (
    <section className="my-5 xmd:my-10 w-full">
      <Container className="py-5 xmd:py-10 flex justify-between items-start w-full">
        <div>
          <Image src="/event/speaker.png" alt="speaker" className=" w-[495px] h-full" />
        </div>
        <div className=" w-full max-w-[600px] pt-8">
          <Typography className=" font-bold">Speaker</Typography>
          <Heading variant="h3" className="text-[2.875rem]">
            Kathryn Murphy
          </Heading>
          <Typography className=" mb-8 normal-case text-[1.25rem] font-normal text-gray700">Analyst and Marketing specialist in IT company</Typography>
          <Typography className=" mb-10 normal-case text-base font-normal text-gray800">
            Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo,
            consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse
            proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.
          </Typography>
          <div className=" w-full max-w-[395px] flex justify-between items-center mb-10">
            <Image src="/clients/client1.png" alt="client1" className="w-full max-w-[105px]" />
            <Image src="/clients/client2.png" alt="client2" className="w-full max-w-[105px]" />
            <Image src="/clients/client2.png" alt="client3" className="w-full max-w-[105px]" />
          </div>
          <SocialLinks socialLinks={links} />
        </div>
      </Container>
    </section>
  );
};
