import React from 'react';
import {defaultTheme, ToggleThemeButton} from "react-admin";
import {createTheme} from "@mui/material";

const darkTheme = createTheme({
    palette: {mode: 'dark'},
});

const ToggleThemeBtn = () => (

    <ToggleThemeButton
        lightTheme={defaultTheme}
        darkTheme={darkTheme}
    />
)

export default ToggleThemeBtn;