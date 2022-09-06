import * as React from 'react';
import {useLocaleState,  useUserMenu} from 'react-admin';
import LanguageIcon from '@mui/icons-material/Language';
import {forwardRef} from "react";
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


// It's important to pass the ref to allow MUI to manage the keyboard navigation

const SwitchLanguage = forwardRef((props, ref) => {
    const [locale, setLocale] = useLocaleState();
    // We are not using MenuItemLink so we retrieve the onClose function from the UserContext
    const { onClose } = useUserMenu();

    return (
        <MenuItem
            ref={ref}
            // It's important to pass the props to allow MUI to manage the keyboard navigation
            {...props}
            sx={{ color: 'text.secondary' }}
            onClick={event => {
                setLocale(locale === 'en' ? 'en' : 'ru');
                onClose(); // Close the menu
            }}
        >
            <ListItemIcon sx={{ minWidth: 5 }}>
                <LanguageIcon />
            </ListItemIcon>
            <ListItemText>
                En
            </ListItemText>
        </MenuItem>
    );
});

export default SwitchLanguage