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
    ReferenceInput,
    SelectInput
} from 'react-admin';
import {MyDatagrid} from "../UI/MyDatagrid/MyDatagrid";

const SkillsFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder='Skill id' source='id' resettable alwaysOn/>
    </Filter>
);

export const SkillsList = (props) => (
    <List {...props}
          filters={<SkillsFilter/>}
          title='Лист Навыков'
          sort={{field: 'id', order: 'ASC'}}
    >
        <MyDatagrid rowClick={(id) => `${id}`}>
            <TextField disabled source='id'/>
            <TextField source='code'/>
            <TextField source='description'/>
            <TextField source='level'/>
            <TextField source='title'/>
            <TextField source='difficulty'/>
        </MyDatagrid>
    </List>
);


export const SkillEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='code'/>
            <TextInput source='description'/>
            <SelectInput
                source='level'
                choices={[
                    {id: 'junior', name: 'junior'},
                    {id: 'middle', name: 'middle'},
                    {id: 'senior', name: 'senior'},
                ]}
            />
            <TextInput source='title'/>
            <SelectInput
                source='difficulty'
                choices={[
                    {id: '1', name: '1'},
                    {id: '2', name: '2'},
                    {id: '3', name: '3'},
                    {id: '4', name: '4'},
                ]}
            />
        </SimpleForm>
    </Edit>
);

export const SkillCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='code' name={'code'}/>
            <TextInput source='description' name={'description'}/>
            <TextInput source='title'/>
            <SelectInput
                source='level'
                choices={[
                    {id: 'junior', name: 'junior'},
                    {id: 'middle', name: 'middle'},
                    {id: 'senior', name: 'senior'},
                ]}
            />
            <SelectInput
                source='difficulty'
                choices={[
                    {id: '1', name: '1'},
                    {id: '2', name: '2'},
                    {id: '3', name: '3'},
                    {id: '4', name: '4'},
                ]}
            />
        </SimpleForm>
    </Create>
);
