import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    marginBottom: '10px',
    '&:before': {
        display: 'none',
    },
    '& .MuiAccordionSummary-root': {
        border: '1px solid #828c96',
    },
    '& .MuiAccordionSummary-root.Mui-expanded': {
        background: '#ff3d55',
        border: '1px solid #ff3d55'
    },
    '& .MuiAccordionSummary-root.Mui-expanded .MuiTypography-body1': {
        color: '#fff !important',
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({

    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'red'
            : '#fff',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
        color: '#fff'
    },

    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ServiceAccordion = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography sx={{
                        color: '#273f5b',
                        fontSize: '18px !important',
                        fontWeight: '600 !important'
                    }}>Trade show strategy consultation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: '#828c96', fontSize: '15px', lineHeight: '26px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography sx={{
                        color: '#273f5b',
                        fontSize: '18px !important',
                        fontWeight: '600 !important'
                    }}>Full project management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: '#828c96', fontSize: '15px', lineHeight: '26px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography sx={{
                        color: '#273f5b',
                        fontSize: '18px !important',
                        fontWeight: '600 !important'
                    }}>On-site support</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: '#828c96', fontSize: '15px', lineHeight: '26px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography sx={{
                        color: '#273f5b',
                        fontSize: '18px !important',
                        fontWeight: '600 !important'
                    }}>Post-trade show support</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: '#828c96', fontSize: '15px', lineHeight: '26px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default ServiceAccordion;