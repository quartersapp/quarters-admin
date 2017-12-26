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

import CitiesIcon from 'material-ui/svg-icons/communication/location-on'
export { CitiesIcon }

export const CityList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='googlePlaceId' />
      <EditButton />
    </Datagrid>
  </List>
)

export const CityEdit = (props) => (
  <Edit title='City' {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='name' />
      <TextInput source='googlePlaceId' />
    </SimpleForm>
  </Edit>
)

export const CityCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='googlePlaceId' />
    </SimpleForm>
  </Create>
)
