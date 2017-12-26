import React from 'react'
import { Admin, Resource, Delete } from 'admin-on-rest'
import authClient from './auth-client'
import restClient from './rest-client'

import { ArtistList, ArtistEdit, ArtistCreate } from './resources/artists'
import { GenreList, GenreEdit, GenreCreate } from './resources/genres'
import { CityList, CityEdit, CityCreate } from './resources/cities'
import { UserList, UserEdit, UserCreate } from './resources/users'
import { VenueList, VenueEdit, VenueCreate } from './resources/venues'

const App = () => (
  <Admin
    authClient={authClient}
    restClient={restClient}
    title='Quarters Admin'
  >
    <Resource
      name='artists'
      list={ArtistList}
      edit={ArtistEdit}
      create={ArtistCreate}
    />
    <Resource
      name='cities'
      list={CityList}
      edit={CityEdit}
      create={CityCreate}
    />
    <Resource
      name='genres'
      list={GenreList}
      edit={GenreEdit}
      create={GenreCreate}
      remove={Delete}
    />
    <Resource
      name='users'
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource
      name='venues'
      list={VenueList}
      edit={VenueEdit}
      create={VenueCreate}
    />
  </Admin>
)

export default App
