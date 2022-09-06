import React from "react";
import {MenuItemLink} from "react-admin";
import {useTranslation} from "react-i18next";

import Groups2Icon from '@mui/icons-material/Groups2';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Menu = () => {

    const {t} = useTranslation('scrollBar');

    const items = [
        {
            // primaryText: 'Users',
            primaryText: t('users'),
            icon: <Groups2Icon/>,
            path: 'users',
        },
        {
            primaryText: 'Skills',
            icon: <BookmarksIcon/>,
            path: 'skills',
        },
        {
            primaryText: 'Specializations',
            icon: <LaptopChromebookIcon/>,
            path: 'specializations',
        },
        {
            primaryText: 'Materials',
            icon: <MenuBookIcon/>,
            path: '/materials',
        },
    ]

    return (
        <div>
            {items.map((i, index) => <MenuItemLink
                key={index}
                leftIcon={i.icon}
                to={i.path}
                primaryText={i.primaryText}
            />)}
        </div>
    );
};

export default Menu;