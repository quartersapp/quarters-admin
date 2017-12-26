import React from 'react'
import {
  List,
  Datagrid,
  EditButton,
  TextField,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  Create
} from 'admin-on-rest'

export const GenreList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <EditButton />
    </Datagrid>
  </List>
)

export const GenreEdit = (props) => (
  <Edit title='Genre' {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='name' />
    </SimpleForm>
  </Edit>
)

export const GenreCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
    </SimpleForm>
  </Create>
)
