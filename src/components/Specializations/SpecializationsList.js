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



const USpecializationsFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder='Customer Email' source='email' resettable alwaysOn/>
    </Filter>
);

export const SpecializationsList = (props) => {

    return (
        <List {...props}
              filters={<USpecializationsFilter/>}
              title='Лист специализаций'
              // sort={{field: 'id', order: 'ASC'}}
        >
            <Datagrid rowClick={(id) => `${id}`}>
                <TextField disabled source='id'/>
                <TextField source='code'/>
                <TextField source='description'/>
                <TextField source='pageDescription'/>
                <TextField source='pageDescription'/>
                <TextField source='pageTitle'/>
                <TextField source='status'/>
                {/*<SelectInput*/}
                {/*    source='status'*/}
                {/*    choices={[*/}
                {/*        { id: 'true', name: 'visible' },*/}
                {/*        { id: 'false', name: 'not visible' },*/}
                {/*    ]}*/}
                {/*/>*/}
                <TextField source='maxSalary'/>
                <TextField source='minSalary'/>
                <TextField source='title'/>
            </Datagrid>
        </List>
    )
};



export const SpecializationEdit = props => (
    <Edit {...props} title='Редактировать специализацию'>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='code'/>
            <TextInput source='description'/>
            <TextInput source='pageDescription'/>
            <TextInput source='pageDescription'/>
            <TextInput source='pageTitle'/>
            <SelectInput
                source='status'
                choices={[
                    { id: 'visible', name: 'visible' },
                    { id: 'not visible', name: 'not visible' },
                ]}
            />
            <TextInput source='maxSalary'/>
            <TextInput source='minSalary'/>
            <TextInput source='title'/>
        </SimpleForm>
    </Edit>
);

export const SpecializationCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput disabled source='id'/>
            <TextInput source='code'/>
            <TextInput source='description'/>
            <TextInput source='pageDescription'/>
            <TextInput source='pageDescription'/>
            <TextInput source='pageTitle'/>
            <SelectInput
                source='status'
                choices={[
                    { id: 'true', name: 'true' },
                    { id: 'false', name: 'false' },
                ]}
            />
            <TextInput source='maxSalary'/>
            <TextInput source='minSalary'/>
            <TextInput source='title'/>
        </SimpleForm>
    </Create>
);
