import React from 'react'
import Header from './Header'
import Genres from './Genres'
import NewGenre from './NewGenre'
import EditGenre from './EditGenre'
import Series from './Series'
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
          <Route path='/series' component={Series} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
