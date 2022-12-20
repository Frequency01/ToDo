
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '../ui-custom/customAccordion'
import arrow from '../../images/arrow.svg'
import Grid from '@mui/material/Grid';
import Tasks from '../task/tasks'

import styles from './styles.module.scss';


type DayProps = {
    defautlTitle: string;
}

const Day = ({ defautlTitle }: DayProps) => {

    const [expanded, setExpanded] = useState<boolean>(false);
    const [day, setDay] = useState<string>(defautlTitle)
    
    const handleChange = (_event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded);
    };

    let handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDay(e.target.value)
    }

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Accordion expanded={expanded} onChange={handleChange}>
                <AccordionSummary expandIcon={<img src={arrow} alt='arrow' />}>
                    <input className={styles.day} value={day} onChange={handleChangeTitle} />
                </AccordionSummary>
                <AccordionDetails>
                    <Tasks />
                </AccordionDetails>
            </Accordion>
            </Grid>
    );
};

export default Day;