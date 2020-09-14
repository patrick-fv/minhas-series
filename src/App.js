import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Genres from './Genres'
import NewGenre from './NewGenre'
import EditGenre from './EditGenre'
import axios from 'axios'

const App = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then((res) => {
      setData(res.data)
      console.log(data);
    })
  }, [])

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route path='/generos' exact component={Genres} />
        <Route path='/generos/novo' component={NewGenre} />
        <Route path='/generos/:id' component={EditGenre} />
      </div>
    </BrowserRouter>
  )
}

export default App
