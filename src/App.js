import React from 'react'
import { Admin, Resource, Delete } from 'admin-on-rest'
import authClient from './auth-client'
import restClient from './rest-client'

import { ArtistIcon, ArtistList, ArtistEdit, ArtistCreate } from './resources/artists'
import { GenreIcon, GenreList, GenreEdit, GenreCreate } from './resources/genres'
import { CitiesIcon, CityList, CityEdit, CityCreate } from './resources/cities'
import { UserIcon, UserList, UserEdit, UserCreate } from './resources/users'
import { VenueIcon, VenueList, VenueEdit, VenueCreate } from './resources/venues'

const App = () => (
  <Admin
    authClient={authClient}
    restClient={restClient}
    title='Quarters Admin'
  >
    <Resource
      name='artists'
      icon={ArtistIcon}
      list={ArtistList}
      edit={ArtistEdit}
      create={ArtistCreate}
    />
    <Resource
      name='cities'
      icon={CitiesIcon}
      list={CityList}
      edit={CityEdit}
      create={CityCreate}
    />
    <Resource
      name='genres'
      icon={GenreIcon}
      list={GenreList}
      edit={GenreEdit}
      create={GenreCreate}
      remove={Delete}
    />
    <Resource
      name='users'
      icon={UserIcon}
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
    <Resource
      name='venues'
      icon={VenueIcon}
      list={VenueList}
      edit={VenueEdit}
      create={VenueCreate}
    />
  </Admin>
)

export default App
