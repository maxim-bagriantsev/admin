import * as React from 'react';
import {Logout, UserMenu} from 'react-admin';
import {Link} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';

import {CustomIcon} from "../../CustomIcon/CustomIcon";
import {ForwardedRef, useState} from "react";

const SettingsMenu = React.forwardRef((props, ref: ForwardedRef<any>) => {

    return (
        <MenuItem
            ref={ref}
            component={Link}
            // It's important to pass the props to allow MUI to manage the keyboard navigation
            {...props}
            to="/settings"
            onClick={(event)=>console.log(event)}
        >
            <ListItemIcon>
                <SettingsIcon/>
            </ListItemIcon>
            <ListItemText>
                Settings
            </ListItemText>
        </MenuItem>
    );
});

const ProfileMenu = React.forwardRef((props, ref: ForwardedRef<any>) => {


    return (
        <MenuItem
            ref={ref}
            component={Link}
            // It's important to pass the props to allow MUI to manage the keyboard navigation
            {...props}
            to="/profile"
        >
            <ListItemIcon>
                <Person2Icon/>
            </ListItemIcon>
            <ListItemText>
                Profile
            </ListItemText>
        </MenuItem>
    );
});

export const MyUserMenu = (props: any) => {
    return (
        <UserMenu {...props} icon={<CustomIcon/>}>
            <ProfileMenu/>
            <SettingsMenu/>
            <Logout/>
        </UserMenu>
    )
};