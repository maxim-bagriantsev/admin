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
    ReferenceField,
    ReferenceInput,
    SelectInput
} from 'react-admin';

const CustomerFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder='User id' source='id' resettable alwaysOn name='id'/>
    </Filter>
);


const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
        <ReferenceInput label='User' source='id' reference='users' allowEmpty>
            <SelectInput optionText='name' />
        </ReferenceInput>
    </Filter>
);

export const UsersList = (props) => {

    return (
        <List {...props}
              // filters={<CustomerFilter/>}
              filters={<PostFilter/>}
              title='Лист пользователей'
        >
            <Datagrid rowClick={(id) => `${id}`}>
                <TextField disabled source='id'/>
                <TextField source='name'/>
                <TextField source='lastName'/>
                <TextField source='email'/>
                <TextField source='status'/>
            </Datagrid>

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
            <TextInput source='status' name={'status'}/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='name' name={'name'}/>
            <TextInput source='lastName' name={'lastName'}/>
            <TextInput source='email' name={'email'}/>
            <TextInput source='status' name={'status'}/>
        </SimpleForm>
    </Create>
);
