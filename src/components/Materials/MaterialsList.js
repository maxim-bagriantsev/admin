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


const MaterialsFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder='Search by name' source='label' resettable alwaysOn/>
    </Filter>
);

export const MaterialsList = (props) => {

    return (
        <List {...props}
              filters={<MaterialsFilter/>}
              title='Лист Материалов'
              sort={{field: 'id', order: 'ASC'}}
        >
            <Datagrid rowClick={(id) => `${id}`}>
                <TextField disabled source='id'/>
                <TextField source='url'/>
                <TextField source='label'/>
                <TextField source='description'/>
                <TextField source='type'/>
                <TextField source='time'/>
                <TextField source='is_free'/>
                <TextField source='hidden'/>
            </Datagrid>
        </List>
    )
};

export const MaterialEdit = props => (
    <Edit {...props} title='Редактировать специализацию'>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='url'/>
            <TextInput source='label'/>
            <TextInput source='description'/>
            <SelectInput
                source='type'
                choices={[
                    {id: 'article', name: 'article'},
                    {id: 'video', name: 'video'},
                ]}
            />
            <TextInput source='time'/>
            <SelectInput
                source='is_free'
                choices={[
                    {id: 'true', name: 'true'},
                    {id: 'false', name: 'false'},
                ]}
            />
            <SelectInput
                source='hidden'
                choices={[
                    {id: 'true', name: 'true'},
                    {id: 'false', name: 'false'},
                ]}
            />
        </SimpleForm>
    </Edit>
);

export const MaterialCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='url'/>
            <TextInput source='label'/>
            <TextInput source='description'/>
            <SelectInput
                source='type'
                choices={[
                    {id: 'article', name: 'article'},
                    {id: 'video', name: 'video'},
                ]}
            />
            <TextInput source='time'/>
            <SelectInput
                source='is_free'
                choices={[
                    {id: 'true', name: 'true'},
                    {id: 'false', name: 'false'},
                ]}
            />
            <SelectInput
                source='hidden'
                choices={[
                    {id: 'true', name: 'true'},
                    {id: 'false', name: 'false'},
                ]}
            />
        </SimpleForm>
    </Create>
);
