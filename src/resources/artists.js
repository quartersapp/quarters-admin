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
  ReferenceField,
  LongTextInput
} from 'admin-on-rest'

import ArtistIcon from 'material-ui/svg-icons/action/stars'
export { ArtistIcon }

export const ArtistList = (props) => (
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

export const ArtistEdit = (props) => (
  <Edit title='Artist' {...props}>
    <SimpleForm>
      <DisabledInput source='id' />
      <TextInput source='name' />
      <ReferenceInput
        allowEmpty
        label='city'
        source='cityId'
        reference='cities'>
        <AutocompleteInput optionText='name' />
      </ReferenceInput>
      <LongTextInput source='bio' />
    </SimpleForm>
  </Edit>
)

export const ArtistCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <ReferenceInput
        allowEmpty
        label='city'
        source='cityId'
        reference='cities'>
        <AutocompleteInput optionText='name' />
      </ReferenceInput>
      <LongTextInput source='bio' />
    </SimpleForm>
  </Create>
)
