import * as React from 'react';
import {AppBar, defaultTheme, ToggleThemeButton} from 'react-admin';
import {MyUserMenu} from "../../UI/MyUserMenu/MyUserMenu";
import {createTheme, Box, Typography} from '@mui/material';
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";

const darkTheme = createTheme({
    palette: {mode: 'dark'},
});

export const MyAppBar = props => (
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
                // className={classes.title}
                id="react-admin-title"
            >
             {/*Свой текст*/}
            </Typography>
        </Box>
        <ToggleThemeButton
            lightTheme={defaultTheme}
            darkTheme={darkTheme}
        />
        <SwitchLanguage/>
    </AppBar>
);



