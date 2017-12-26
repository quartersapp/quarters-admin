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
  ReferenceInput,
  AutocompleteInput,
  ReferenceField
} from 'admin-on-rest'

export const VenueList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <ReferenceField
        label='city'
        source='cityId'
        reference='cities'>
        <TextField source='name' />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
)

export const VenueEdit = (props) => (
  <Edit title='Venue' {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='name' />
      <TextInput source='googlePlaceId' />
      <ReferenceInput
        allowEmpty
        label='city'
        source='cityId'
        reference='cities'>
        <AutocompleteInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
)

export const VenueCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='googlePlaceId' />
      <ReferenceInput
        allowEmpty
        label='city'
        source='cityId'
        reference='cities'>
        <AutocompleteInput optionText='name' />
      </ReferenceInput>
    </SimpleForm>
  </Create>
)
