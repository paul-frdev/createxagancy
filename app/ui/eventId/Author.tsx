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
      <Container className="py-5 xmd:py-10 flex flex-col xmd:flex-row justify-between gap-x-4 items-center xmd:items-start w-full">
        <Image src="/event/speaker.png" alt="speaker" className=" w-full max-w-[495px] h-full" />
        <div className=" w-full max-w-[600px] pt-8">
          <Typography className=" text-center xmd:text-left font-bold">Speaker</Typography>
          <Heading variant="h3" className="text-[2.2rem] xmd:text-[2.875rem] text-center xmd:text-left">
            Kathryn Murphy
          </Heading>
          <Typography className="text-center xmd:text-left mb-8 normal-case text-[1.25rem] font-normal text-gray700">Analyst and Marketing specialist in IT company</Typography>
          <Typography className=" text-justify xmd:text-left mb-10 normal-case text-base font-normal text-gray800">
            Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo,
            consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse
            proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.
          </Typography>
          <div className=" w-full max-w-[395px] mx-auto xmd:mx-0 flex justify-between items-center mb-10">
            <Image src="/clients/client1.png" alt="client1" className="w-full max-w-[105px]" />
            <Image src="/clients/client2.png" alt="client2" className="w-full max-w-[105px]" />
            <Image src="/clients/client2.png" alt="client3" className="w-full max-w-[105px]" />
          </div>
          <SocialLinks className="mx-auto xmd:mx-0" socialLinks={links} />
        </div>
      </Container>
    </section>
  );
};
