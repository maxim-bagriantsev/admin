import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField , Edit, SimpleForm, TextInput} from 'react-admin';
export const Test = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='username' />
            <EmailField source='email' />
            <TextField source='address.street' label='Address' />
            <TextField source='phone' />
            <UrlField source='website' />
            <TextField source='company.name' label='Company' />
        </Datagrid>
    </List>
);

export const TestEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='username' />
            <TextInput source='email' />
            <TextInput source='address.street' label='Address' />
            <TextInput source='phone' />
            <UrlField source='website' />
            <TextInput source='company.name' label='Company' />
        </SimpleForm>
    </Edit>
);