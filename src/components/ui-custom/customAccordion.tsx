import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';





export const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    color: '#F4F4F4',
    marginBottom: '20px',
    background: '#282828',
    boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15), -8px -8px 20px rgba(255, 255, 255, 0.05)',
    borderRadius: '25px',
    width: '350px',
    marginLeft: '20px',
    // '&:not(:first-of-type)': {
    //     marginTop: '10px',
    // },
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
        marginTop: '10px',
    },
    '&:before': {
        display: 'none',
    },
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(180deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
