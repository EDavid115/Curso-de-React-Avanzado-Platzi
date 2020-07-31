import React from 'react'
import { GlobalStyle } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'

export const App = () => (
  <div>
    <GlobalStyle />
    <ListOfCategories />
  </div>
)