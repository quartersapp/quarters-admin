import React from 'react'
import {
  List,
  Datagrid,
  EditButton,
  EmailField,
  TextField,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  Create,
  CheckboxGroupInput
} from 'admin-on-rest'

import UserIcon from 'material-ui/svg-icons/social/person'
export { UserIcon }

const ROLES = [
  { id: 'admin', name: 'Admin' }
]

export const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <EmailField source='email' />
      <TextField source='firstName' />
      <TextField source='lastName' />
      <EditButton />
    </Datagrid>
  </List>
)

export const UserEdit = (props) => (
  <Edit title='User' {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='email' />
      <TextInput source='password' type='password' />
      <CheckboxGroupInput source='roles' choices={ROLES} />
      <TextInput source='firstName' />
      <TextInput source='lastName' />
    </SimpleForm>
  </Edit>
)

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='email' />
      <TextInput source='password' type='password' />
      <CheckboxGroupInput source='roles' choices={ROLES} />
      <TextInput source='firstName' />
      <TextInput source='lastName' />
    </SimpleForm>
  </Create>
)
