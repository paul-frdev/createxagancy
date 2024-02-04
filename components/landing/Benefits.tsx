'use client'
import React, { useState } from 'react'
import { Heading } from '../ui/Heading'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';
import ChatBubbleOutlineTwoToneIcon from '@mui/icons-material/ChatBubbleOutlineTwoTone';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Box } from '@mui/material';
import { Image } from '../ui/Image';
import { Container } from '../ui/Container';




export const Benefits = () => {

  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  return (
    <section className='mb-[5rem] w-full'>
      <Container>
        <div className='flex flex-col justify-center items-center mb-[2.5rem]'>
          <p className='text-base font-latoBold font-[700] uppercase leading-[150%] tracking-[1px] mb-4'>Our benefits</p>
          <Heading variant='h3' className='text-[2.875rem]'>That’s how we do it</Heading>
        </div>
        <TabContext value={value}>
          <Box sx={{ borderColor: 'divider', marginBottom: '5.5rem' }}>
            <TabList
              TabIndicatorProps={{
                style: {
                  backgroundColor: "transparent",
                }
              }}
              onChange={handleChange}
              aria-label="lab API tabs example"
            >
              <Tab className='flex flex-row w-full max-w-[307px] text-gray600 rounded justify-center items-center gap-x-[0.5rem] p-0 text-base font-latoBold font-[700] min-h-[46px]' icon={<StarBorderIcon />} label="Experienced Tutors" value="1" />
              <Tab className='flex flex-row w-full max-w-[307px] text-gray600 rounded justify-center items-center gap-x-[0.5rem] p-0 text-base font-latoBold font-[700] min-h-[46px]' icon={<ThumbUpOffAltIcon />} label="Feedback & Support" value="2" />
              <Tab className='flex flex-row w-full max-w-[307px] text-gray600 rounded justify-center items-center gap-x-[0.5rem] p-0 text-base font-latoBold font-[700] min-h-[46px]' icon={<FlipToFrontIcon />} label="24/7 Online Library" value="3" />
              <Tab className='flex flex-row w-full max-w-[307px] text-gray600 rounded justify-center items-center gap-x-[0.5rem] p-0 text-base font-latoBold font-[700] min-h-[46px]' icon={<ChatBubbleOutlineTwoToneIcon />} label="Community" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1" className='flex justify-between items-center p-0'>
            <div className='w-full max-w-[500px]'>
              <Heading variant='h4' className='mb-6'>Only practicing tutors</Heading>
              <p className=' text-base font-latoRegular font-[400] leading-[160%]'>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
            </div>
            <div>
              <Image src='/assets/benefits.jpg' alt='benefits' className='max-w-[600px] h-[400px]' />
            </div>
          </TabPanel>
          <TabPanel value="2" className='flex justify-between items-center p-0'>
            <div className='w-full max-w-[500px]'>
              <Heading variant='h4' className='mb-6'>Only practicing tutors</Heading>
              <p className=' text-base font-latoRegular font-[400] leading-[160%]'>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
            </div>
            <div>
              <Image src='/assets/benefits.jpg' alt='benefits' className='max-w-[600px] h-[400px]' />
            </div>
          </TabPanel>
          <TabPanel value="3" className='flex justify-between items-center p-0'>
            <div className='w-full max-w-[500px]'>
              <Heading variant='h4' className='mb-6'>Only practicing tutors</Heading>
              <p className=' text-base font-latoRegular font-[400] leading-[160%]'>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
            </div>
            <div>
              <Image src='/assets/benefits.jpg' alt='benefits' className='max-w-[600px] h-[400px]' />
            </div>
          </TabPanel>
          <TabPanel value="4" className='flex justify-between items-center p-0'>
            <div className='w-full max-w-[500px]'>
              <Heading variant='h4' className='mb-6'>Only practicing tutors</Heading>
              <p className=' text-base font-latoRegular font-[400] leading-[160%]'>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
            </div>
            <div>
              <Image src='/assets/benefits.jpg' alt='benefits' className='max-w-[600px] h-[400px]' />
            </div>
          </TabPanel>
        </TabContext>
      </Container>
    </section>
  )
}