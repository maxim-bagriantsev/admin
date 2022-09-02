import React from 'react';
import {
    List,
    Filter,
    Datagrid,
    TextField,
    SearchInput,
    SimpleForm,
    Create,
    Edit,
    TextInput,
    SelectInput
} from 'react-admin';
import {MyDatagrid} from "../UI/MyDatagrid/MyDatagrid";


const UserFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder='Customer Email' source='email' resettable alwaysOn/>
    </Filter>
);

export const UsersList = (props) => {

    return (
        <List {...props}
              filters={<UserFilter/>}
              title='Лист пользователей'
              sort={{field: 'id', order: 'ASC'}}
        >
            <MyDatagrid
                rowClick={(id) => `${id}`}
                sx={{
                    backgroundColor: "Lavender",
                    "& .RaDatagrid-headerCell": {
                        backgroundColor: "MistyRose",
                    },
                }}
            >
                <TextField disabled source='id'/>
                <TextField source='name'/>
                <TextField source='lastName'/>
                <TextField source='email'/>
                <TextField source='status'/>
            </MyDatagrid>
        </List>
    )
};


export const UserEdit = props => (
    <Edit {...props} title='Редактировать пользователя'>
        <SimpleForm>
            <TextInput disabled source='id' name={'id'}/>
            <TextInput source='name' name={'name'}/>
            <TextInput source='lastName' name={'lastName'}/>
            <TextInput source='email' name={'email'}/>
            <SelectInput
                source='status'
                choices={[
                    {id: 'active', name: 'active'},
                    {id: 'pending', name: 'pending'},
                ]}
            />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' name={'name'}/>
            <TextInput source='lastName' name={'lastName'}/>
            <TextInput source='email' name={'email'}/>
            <TextInput source='password' name={'password'}/>
            <TextInput source='confirm password ' name={'confirm password'}/>
        </SimpleForm>
    </Create>
);
