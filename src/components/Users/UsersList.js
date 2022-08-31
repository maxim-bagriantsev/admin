import React from 'react';
import {List, Filter, Datagrid, TextField, SearchInput, SimpleForm, Create, Edit, TextInput} from 'react-admin';

const CustomerFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder='Customer Email' source='email' resettable alwaysOn name='email'/>
    </Filter>
);

export const UsersList = (props) => (
    <List {...props}
          filters={<CustomerFilter/>}
          title='Лист пользователей' >
        <Datagrid rowClick='edit'>
            <TextField disabled source='id'/>
            <TextField source='name'/>
            <TextField source='lastName'/>
            <TextField source='email'/>
            <TextField source='status'/>
        </Datagrid>
    </List>
);


export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' name={'id'}/>
            <TextInput source='name' name={'name'}/>
            <TextInput source='lastName' name={'lastName'}/>
            <TextInput source='email' name={'email'}/>
            <TextInput source='status' name={'status'}/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextField source='name' name={'name'}/>
            <TextField source='lastName' name={'lastName'}/>
            <TextField source='email' name={'email'}/>
            <TextField source='status' name={'status'}/>
        </SimpleForm>
    </Create>
);
