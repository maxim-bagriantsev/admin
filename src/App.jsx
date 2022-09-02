import React, {useEffect, useState} from 'react';

import {Admin, defaultTheme, Resource} from 'react-admin';
import {authProvider,} from './Auth';
import {UserEdit, UsersList, UserCreate} from './components/Users/UsersList';
import {SkillCreate, SkillEdit, SkillsList} from "./components/Skills/SkillsList";

import UserIcon from '@mui/icons-material/Group';

import dataProvider from "./dataProvider";
import {
    SpecializationCreate,
    SpecializationEdit,
    SpecializationsList
} from "./components/Specializations/SpecializationsList";
import {MaterialCreate, MaterialEdit, MaterialsList} from "./components/Materials/MaterialsList";
import MyLayout from "./components/MyLayout/MyLayout";


//боковая панель
const theme = {
    ...defaultTheme,
    sidebar: {
        width: 300, // The default value is 240
        closedWidth: 55, // The default value is 55
    },
};

const App = () => {

    return (
        <>
            <Admin
                dataProvider={dataProvider}
                authProvider={authProvider}
                layout={MyLayout}
                // theme={theme}
            >
                <Resource name='users' list={UsersList} create={UserCreate} edit={UserEdit} icon={UserIcon}/>
                <Resource name='skills' list={SkillsList} create={SkillCreate} edit={SkillEdit}/>
                <Resource name='specializations' list={SpecializationsList} create={SpecializationCreate} edit={SpecializationEdit}/>
                <Resource name='materials' list={MaterialsList} create={MaterialCreate} edit={MaterialEdit}/>
            </Admin>
        </>

    );
}

export default App;
