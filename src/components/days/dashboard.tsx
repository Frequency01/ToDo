import * as React from 'react';
import Day from '../day/day'
import styles from './styles.module.scss'


const defaultDays = new Array(3).fill(null).map((_el, index) => {
    const dayNumber = new Date().getDate();
    const date = new Date();
    const dayМonth = date.getMonth();
    return { defautlTitle: dayNumber + index + '/' + dayМonth + ' Tasks' }
})

const Dashboard = () => {

    const [days, setDays] = React.useState(defaultDays)

    let handleCreateDay = () => {
        let number = Number(days[days.length - 1].defautlTitle.split('/')[0]) + 1;
        const date = new Date();
        const dayМonth = date.getMonth();
        let newDay = { defautlTitle: String(number + '/' + dayМonth + ' Tasks') }
        setDays((_) => [...days, newDay])
    }

    return (
        <div className={styles.day}>
            {days.map((day) => {
                return <Day key={day.defautlTitle} defautlTitle={day.defautlTitle} />
            })}
            <div className={styles.plus} onClick={handleCreateDay}>+</div>
        </div>

    );
};

export default Dashboard;