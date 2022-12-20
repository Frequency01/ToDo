
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { IOSSwitch } from '../ui-custom/customSwitch'

import styles from './styles.module.scss';

type defaultTask = {
    header: string;
    desc: string;
    swither: boolean;
    id: number;
    color: string;
}

const generateColor = () => {
    return Math.random().toString(16).substr(-6);
}
const generateId = () => {
    return Math.random() * 1000;
}

const createTask = (header: string, desc: string) => {
    return { header, desc, swither: false, id: generateId(), color: generateColor() }
}

let defaultTasks = [
    createTask('Visit David', '2200 Burton St Beloit'),
    createTask('Fix Dad’s iPad', 'Need new screen'),
    createTask('Buy milk', 'I need 0.5%'),
    createTask('Visit David', '2200 Burton St Beloit'),
    createTask('Relax', 'we need some SPA maybe?🛀'),
    createTask('Prepare my project', 'idk'),
    createTask('Pass the interview', 'omg😵‍💫'),
]

function generateRandomTasks(arr: defaultTask[], num: number) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
}


const Tasks = () => {
    const [tasks, setTasks] = useState<defaultTask[]>(generateRandomTasks(defaultTasks, 2))

    let handleAddTask = () => {
        let addedTask = { header: 'Add task name', desc: 'Add description', swither: false, id: generateId(), color: generateColor() };
        setTasks((_) => [...tasks, addedTask])
    }

    let handleChangeTask = (newValue: string | boolean, ex: defaultTask, key: string) => {
        let newTasks = tasks.map((item) => {
            if (item.id === ex.id) {
                return { ...item, [key]: newValue }
            }
            return item;
        })
        setTasks(newTasks);
    }

    let handleDelete = (task: defaultTask) => {
        const newItems = tasks.filter((item) => item.id !== task.id);
        setTasks(newItems);
    }

    return (
        <Typography component={'div'}>
            {tasks.map((task) => {
                return <div className={styles.task} key={task.id}>
                    <div className={styles.line} style={{ background: `#${task.color}` }} ></div>
                    <div className={styles.inputsContaier}>
                        <input type='text' value={task.header} disabled={task.swither} onChange={(event) => handleChangeTask(event.target.value, task, 'header')} className={styles.inputHeader} style={{ textDecoration: task.swither ? `line-through` : 'none' }} />
                        <input type='text' value={task.desc} disabled={task.swither} onChange={(event) => handleChangeTask(event.target.value, task, 'desc')} className={styles.inputDesc} />
                    </div>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} checked={task.swither} onChange={(_event, checked) => handleChangeTask(checked, task, 'swither')}
                        />}
                        label=""
                    />
                    <button className={styles.delete} onClick={() => handleDelete(task)}>×</button>
                </div>
            })}
            <div onClick={handleAddTask} className={styles.plus}>+</div>
        </Typography>
    );
};

export default Tasks;