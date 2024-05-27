'use client';

import AddIcon from '@mui/icons-material/Add';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
  border: `none`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  backgroundColor: 'transparent',
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<AddIcon className="text-[#ff3f3a]" sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: 'transparent',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: '0rem 1rem 1rem 2.5rem',
  borderTop: 'none',
}));

type MainAccordionProps = {
  items?: { id: number; title: string; text: string; pannel?: string }[];
};

export const MainAccordion: React.FC<MainAccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = React.useState<string | false>(items[0].pannel);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {items.map((item) => (
        <Accordion key={item.id} expanded={expanded === item.pannel} onChange={handleChange(item.pannel)}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>
              <span className="text-[1.25rem] font-latoRegular font-[400] text-primary mr-2">Lesson {item.id}.</span>
              <span className="text-[1.10rem] text-gray900 font-latoBold font-[700]">{item.title}</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-base text-gray800 font-latoRegular font-[400] leading-[160%]">{item.text}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
