import React, {useState} from 'react';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import i18n from "i18next";

const ToggleLanguageBtn = () => {

    const [state, setState] = useState(false)

    // ** Change language
    const changeLanguageEn = (language: string) => {
        i18n.changeLanguage(language);
        setState(true)
    };

    const changeLanguageRu = (language: string) => {
        i18n.changeLanguage(language);
        setState(false)
    }

    return (
        <ButtonGroup
            disableElevation
            variant="text"
            size="small"
            aria-label="vertical contained button group"
        >
            <Button onClick={() => changeLanguageEn("en")}
                    color={state ? 'success' : 'secondary'}
                    variant="contained"
            >EN</Button>
            <Button
                onClick={() => changeLanguageRu("ru")}
                color={!state ? 'success' : 'secondary'}
                variant="contained"
            >RU</Button>
        </ButtonGroup>
    );
};

export default ToggleLanguageBtn;