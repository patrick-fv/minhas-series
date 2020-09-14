import React from 'react'
import Header from './Header'
import Genres from './Genres'
import NewGenre from './NewGenre'
import EditGenre from './EditGenre'
import Series from './Series'
import NewSerie from './NewSerie'
import { 
  BrowserRouter, 
  Route,
  Switch } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path='/generos' exact component={Genres} />
          <Route path='/generos/novo' component={NewGenre} />
          <Route path='/generos/:id' component={EditGenre} />
          <Route path='/series' exact component={Series} />
          <Route path='/series/novo' component={NewSerie} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
