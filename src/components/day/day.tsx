
import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '../ui-custom/customAccordion'
import arrow from '../../images/vector.svg'
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
        <Grid item xs={6} md={8}>
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