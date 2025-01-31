import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    // border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
        transform: 'rotate(90deg)',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    // borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const accordianData = [
    { title: "Collapsible Group Item #1", content: "lorem ipsum 1" },
    { title: "Collapsible Group Item #2", content: "lorem ipsum 2" },
    { title: "Collapsible Group Item #3", content: "lorem ipsum 3" },
    { title: "Collapsible Group Item #4", content: "lorem ipsum 4" },
    { title: "Collapsible Group Item #5", content: "lorem ipsum 5" },
    { title: "Collapsible Group Item #6", content: "lorem ipsum 6" }
]
export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Container>
                {
                    accordianData.map((item, index) => (
                        <Accordion expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)} key={index} style={{marginBottom:'20px',backgroundColor:"#f3f3f3",borderRadius:"20px",padding:'20px'}}>
                            <AccordionSummary aria-controls={`panel${index+1}d-content`} id={`panel${index+1}d-header`} style={{backgroundColor:'transparent'}}>
                                <Typography component="span" className='!text-2xl !font-bold'>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className='!text-2xl !pl-6'>
                                    {item.content}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))
                }

            </Container>
        </div>
    );
}
