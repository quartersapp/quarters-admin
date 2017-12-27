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
  Create,
  required
} from 'admin-on-rest'

import GenreIcon from 'material-ui/svg-icons/action/label'
export { GenreIcon }

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
      <TextInput source='name' validate={required} />
    </SimpleForm>
  </Edit>
)

export const GenreCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' validate={required} />
    </SimpleForm>
  </Create>
)
