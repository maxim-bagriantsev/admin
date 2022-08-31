import React from 'react';
import {List, Filter, Datagrid, TextField, SearchInput, SimpleForm, Create, Edit, TextInput, ReferenceInput, SelectInput} from 'react-admin';

const CustomerFilter = (props) => (
  <Filter {...props}>
      <TextInput label='Search' source='q' alwaysOn />
      <ReferenceInput label='id' source='SkillId' reference='skills' allowEmpty>
          <SelectInput optionText='name' />
      </ReferenceInput>
    {/*<SearchInput placeholder='Skill Code' source='title' resettable alwaysOn />*/}
  </Filter>
);

export const SkillsList = (props) => (
    <List {...props}
          filters={<CustomerFilter />}
          title='Лист Навыков'>
        <Datagrid rowClick='edit'>
            <TextField disabled source='id' />
            <TextField  source='code' />
            <TextField  source='description' />
            <TextField  source='level' />
            <TextField  source='title' />
            <TextField  source='difficulty' />
        </Datagrid>
    </List>
);


export const SkillEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField disabled source='id' />
            <TextField  source='name' />
            <TextField  source='lastName' />
            <TextField  source='email' />
            <TextField source='status' />
        </SimpleForm>
    </Edit>
);

export const SkillCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextField  source='name' />
            <TextField  source='lastName' />
            <TextField  source='email' />
            <TextField source='status' />
        </SimpleForm>
    </Create>
);
