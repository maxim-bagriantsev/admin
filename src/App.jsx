import React, {useEffect, useState} from 'react';

import {Admin, fetchUtils, Resource} from 'react-admin';
import {authProvider,} from './Auth';
import {UserEdit, UsersList, UserCreate} from './components/Users/UsersList';
import {SkillCreate, SkillEdit, SkillsList} from "./components/Skills/SkillsList";

import useGetData from "./hooks/useGetData";



const App = () => {

    const dataProvider = useGetData('http://localhost:3001/api')


    return (
        <>
            <Admin
                dataProvider={dataProvider}
                // authProvider={authProvider}
            >
                <Resource name='users' list={UsersList} create={UserCreate} edit={UserEdit}/>
                <Resource name='skills' list={SkillsList} create={SkillCreate} edit={SkillEdit}/>
                {/*<Resource name='posts' list={Test} edit={TestEdit}/>*/}
            </Admin>
        </>

    );
}

export default App;
