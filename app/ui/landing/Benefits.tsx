'use client';

import { Container } from '../elements/Container';
import { Heading } from '../elements/Heading';
import { Image } from '../elements/Image';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useState } from 'react';

export const Benefits = () => {
  const [value, setValue] = useState('1');
  const isDesktop = useMediaQuery('(min-width:1030px)');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <section className="mb-[5rem] w-full">
      <Container>
        <div className="flex flex-col justify-center items-center mb-[1.5rem] md:mb-[2.5rem]">
          <p className="text-base font-lato font-bold uppercase leading-[150%] tracking-[1px] mb-4">Our benefits</p>
          <Heading variant="h3" className="text-[2rem] md:text-[2.875rem]">
            That’s how we do it
          </Heading>
        </div>
        <TabContext value={value}>
          <Box>
            <TabList
              className="w-full max-w-[1230px] mb-6"
              TabIndicatorProps={{
                style: {
                  backgroundColor: 'transparent',
                },
              }}
              sx={{
                '.Mui-selected': {
                  color: '#ff3f3a !important',
                  border: '1px solid #ff3f3a',
                },
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
              orientation={!isDesktop ? 'vertical' : 'horizontal'}
            >
              <Tab
                className="flex flex-row w-full max-w-[307px] text-gray600 rounded justify-center items-center gap-x-[0.5rem] p-0 text-base font-lato font-bold min-h-[46px]"
                icon={<StarBorderIcon />}
                label="Experienced Tutors"
                value="1"
              />
              <Tab
                className="flex flex-row w-full max-w-[307px] text-gray600 rounded justify-center items-center gap-x-[0.5rem] p-0 text-base font-lato font-bold min-h-[46px]"
                icon={<ThumbUpOffAltIcon />}
                label="Feedback & Support"
                value="2"
              />
              <Tab
                className="flex flex-row w-full max-w-[307px] text-gray600 rounded justify-center items-center gap-x-[0.5rem] p-0 text-base font-lato font-bold min-h-[46px]"
                icon={<FlipToFrontIcon />}
                label="24/7 Online Library"
                value="3"
              />
              <Tab
                className="flex flex-row w-full max-w-[307px] text-gray600 rounded justify-center items-center gap-x-[0.5rem] p-0 text-base font-lato font-bold min-h-[46px]"
                icon={<ChatBubbleOutlineTwoToneIcon />}
                label="Community"
                value="4"
              />
            </TabList>
          </Box>
          <TabPanel value="1" className="flex flex-col lg:flex-row justify-between items-center p-0">
            <div className="w-full max-w-[90%] text-center lg:text-left lg:max-w-[500px]">
              <Heading variant="h4" className="text-center lg:text-left mb-6">
                Only practicing tutors
              </Heading>
              <p className=" text-base font-lato font-normal leading-[160%] mb-6 lg:mb-0">
                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor
                sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image src="/assets/benefits.jpg" alt="benefits" className="w-full max-w-[600px] h-auto lg:h-[400px]" />
            </div>
          </TabPanel>
          <TabPanel value="2" className="flex flex-col lg:flex-row justify-between items-center p-0">
            <div className="w-full max-w-[90%] text-center lg:text-left lg:max-w-[500px]">
              <Heading variant="h4" className="text-center lg:text-left mb-6">
                Only practicing tutors
              </Heading>
              <p className=" text-base font-lato font-normal leading-[160%] mb-6 lg:mb-0">
                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor
                sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image src="/assets/benefits.jpg" alt="benefits" className="w-full max-w-[600px] h-auto lg:h-[400px]" />
            </div>
          </TabPanel>
          <TabPanel value="3" className="flex flex-col lg:flex-row justify-between items-center p-0">
            <div className="w-full max-w-[90%] text-center lg:text-left lg:max-w-[500px]">
              <Heading variant="h4" className="text-center lg:text-left mb-6">
                Only practicing tutors
              </Heading>
              <p className=" text-base font-lato font-normal leading-[160%] mb-6 lg:mb-0">
                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor
                sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image src="/assets/benefits.jpg" alt="benefits" className="w-full max-w-[600px] h-auto lg:h-[400px]" />
            </div>
          </TabPanel>
          <TabPanel value="4" className="flex flex-col lg:flex-row justify-between items-center p-0">
            <div className="w-full max-w-[90%] text-center lg:text-left lg:max-w-[500px]">
              <Heading variant="h4" className="text-center lg:text-left mb-6">
                Only practicing tutors
              </Heading>
              <p className=" text-base font-lato font-normal leading-[160%] mb-6 lg:mb-0">
                Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor
                sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image src="/assets/benefits.jpg" alt="benefits" className="w-full max-w-[600px] h-auto lg:h-[400px]" />
            </div>
          </TabPanel>
        </TabContext>
      </Container>
    </section>
  );
};
