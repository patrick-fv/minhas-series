import React from 'react'
import Header from './Header'
import Genres from './Genres'
import NewGenre from './NewGenre'
import EditGenre from './EditGenre'
import { 
  BrowserRouter, 
  Route,
  Switch } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Switch>
          <Route path='/generos' exact component={Genres} />
          <Route path='/generos/novo' component={NewGenre} />
          <Route path='/generos/:id' component={EditGenre} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
