import * as React from 'react';
import {AppBar} from 'react-admin';
import {MyUserMenu} from "../../UI/MyUserMenu/MyUserMenu";
import {Box, Typography} from '@mui/material';

import {useTranslation} from "react-i18next";


import ToggleLanguageBtn from "../../UI/ToggleLanguageBtn/ToggleLanguageBtn";
import ToggleThemeBtn from "../../UI/ToggleThemeBtn/ToggleThemeBtn";



export const MyAppBar = props => {

    return (
        <AppBar {...props}
                userMenu={<MyUserMenu/>}
                sx={{
                    "& .RaAppBar-title": {
                        flex: 1,
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    },
                }}
        >
            <Box flex="1">
                <Typography
                    variant="h6"
                    color="inherit"
                    id="react-admin-title"
                >
                    {/*Свой текст*/}
                </Typography>
            </Box>
            <ToggleThemeBtn/>
            <ToggleLanguageBtn/>
        </AppBar>
    )
}








