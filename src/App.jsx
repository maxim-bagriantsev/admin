import React, {useEffect, useState} from 'react';

import {Admin, defaultTheme, Resource, Login, CustomRoutes} from 'react-admin';
import {authProvider,} from './pages/Auth';
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
import {Route} from "react-router-dom";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Error404 from "./pages/404";

import './asserts/locales/i18n'
import {Dashboard} from "./components/Dashboard/Dashboard";

//боковая панель
const theme = {
    ...defaultTheme,
    sidebar: {
        width: 300, // The default value is 240
        closedWidth: 55, // The default value is 55
    },
};

const MyLoginPage = () => (
    <Login
        // A random image that changes everyday
        backgroundImage="https://source.unsplash.com/random/1600x900/daily"
    />
);


const App = () => {

    return (
        <>
            <Admin
                dataProvider={dataProvider}
                authProvider={authProvider}
                layout={MyLayout}
                loginPage={MyLoginPage}
                dashboard={Dashboard}
                theme={theme}
            >
                <Resource name='users' list={UsersList} create={UserCreate} edit={UserEdit} icon={UserIcon}
                          intent={'registration'}/>
                <Resource name='skills' list={SkillsList} create={SkillCreate} edit={SkillEdit}/>
                <Resource name='specializations' list={SpecializationsList} create={SpecializationCreate}
                          edit={SpecializationEdit}/>
                <Resource name='materials' list={MaterialsList} create={MaterialCreate} edit={MaterialEdit}/>
                <CustomRoutes>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/404" element={<Error404/>}/>
                </CustomRoutes>
            </Admin>
        </>

    );
}

export default App;
