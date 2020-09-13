import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'

const Generos = () => {
  return (
    <div>
      Generos
    </div>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Route path='/generos' exact component={Generos}/>
      </div>
    </BrowserRouter>
  )
}

export default App
