import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import settingsImg from '../../images/settings.svg';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const SideBar = () => {
    const [state, setState] = useState({
        right: false,
    });


    const toggleDrawer =
        (anchor: string, open: boolean) =>
            (_event: React.KeyboardEvent | React.MouseEvent) => {
                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: string) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={'Вкл/Выкл'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );

    return (
        <>
            <h1>To Do</h1> <Button onClick={toggleDrawer('right', true)}><img src={settingsImg} alt=""/></Button>
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