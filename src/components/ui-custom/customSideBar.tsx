import React, { useState, useContext } from 'react'

import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import settingsImg from '../../images/settings.svg';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { Context } from '../context/context'
import { IOSSwitch } from '../ui-custom/customSwitch'



const SideBar = () => {
    const { isTickerActive, setTickerActive } = useContext(Context)
    const [state, setState] = useState({
        right: false,
    });

    const handleClick = () => {
        setTickerActive(!isTickerActive)
    }

    const toggleDrawer =
        (anchor: string, open: boolean) =>
            (_event: React.KeyboardEvent | React.MouseEvent) => {

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: string) => (
        <>
            <button onClick={toggleDrawer(anchor, false)}>Close</button>
            <Box
                sx={{ width: 250 }}
                role="presentation"
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary={'Turn Off/Turn On'} />
                        <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} checked={isTickerActive} onClick={handleClick}
                            />}
                            label=""
                        />
                    </ListItem>
                </List>
                <Divider />
            </Box>
        </>
    );

    return (
        <>
            <h1 style={{ padding: '15px' }}>To Do</h1> <Button onClick={toggleDrawer('right', true)}><img src={settingsImg} alt="" /></Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </>
    );
};

export default SideBar;