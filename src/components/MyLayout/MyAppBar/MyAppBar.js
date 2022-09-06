import * as React from 'react';
import {AppBar, defaultTheme, ToggleThemeButton, LocalesMenuButton} from 'react-admin';
import {MyUserMenu} from "../../UI/MyUserMenu/MyUserMenu";
import {createTheme, Box, Typography} from '@mui/material';
import SwitchLanguage from "../SwitchLanguage/SwitchLanguage";
import {useTranslation} from "react-i18next";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import i18n from "i18next";
import {useState} from "react";

const darkTheme = createTheme({
    palette: {mode: 'dark'},
});

export const MyAppBar = props => {
    const [state, setState] = useState(false)

    // ** Change language
    const changeLanguageEn = (language) => {
        i18n.changeLanguage(language);
        setState(true)
    };

    const changeLanguageRu = (language) => {
        i18n.changeLanguage(language);
        setState(false)
    };
    const {t} = useTranslation('scrollBar');

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
            <ToggleThemeButton
                lightTheme={defaultTheme}
                darkTheme={darkTheme}
            />
            {/*<SwitchLanguage/>*/}
            {/*<LocalesMenuButton languages={[*/}
            {/*    { locale: 'en', name: 'en' },*/}
            {/*    { locale: 'ru', name: 'ru' },*/}
            {/*]} />*/}

            <ButtonGroup
                disableElevation
                variant="text"
                size="small"
                aria-label="vertical contained button group"
            >
                <Button onClick={() => changeLanguageEn("en")}
                        color={state ? 'success' : 'secondary'}>EN</Button>
                <Button onClick={() => changeLanguageRu("ru")}
                        color={!state ? 'success' : 'secondary'}>RU</Button>
            </ButtonGroup>
        </AppBar>
    )
}








