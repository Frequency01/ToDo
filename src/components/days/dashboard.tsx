import React, {useState} from 'react';
import Day from '../day/day'
import Grid from '@mui/material/Grid';

import styles from './styles.module.scss'



const makeDayObject = (dayNumber:number) => {
    const date = new Date();
    const dayМonth = date.getMonth();
    return { defautlTitle: dayNumber  + '/' + dayМonth + ' Tasks' }
}

const defaultDays = new Array(3).fill(null).map((_el, index) => {
    const dayNumber = new Date().getDate() + index;
    return makeDayObject(dayNumber)
})

const Dashboard = () => {
    const [days, setDays] = useState(defaultDays)

    let handleCreateDay = () => {
        let dayNumber = Number(days[days.length - 1].defautlTitle.split('/')[0]) + 1;
        let newDay = makeDayObject(dayNumber)
        setDays((_) => [...days, newDay])
    }

    return (
        <>
            <Grid container>
                {days.map((day) => {
                    return <Day key={day.defautlTitle} defautlTitle={day.defautlTitle} />
                })}
            </Grid>
            <div className={styles.plus} onClick={handleCreateDay}>+</div>
        </>
    );
};

export default Dashboard;