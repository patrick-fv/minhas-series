import React from 'react'

const HeaderHome = () => {
  return (
    <header className='jumbotron my-4'>
      <h1>Minhas Séries Favoritas</h1>
      <p className='lead'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugit consectetur voluptatibus sed, voluptates modi, obcaecati accusamus nemo incidunt dicta similique consequatur natus dolor porro. Fugit numquam voluptatem corrupti enim.
      </p>
    </header>
  )
}

const Home = () => {
  return (
    <div className='container'>
      <HeaderHome/>
    </div>
  ) 
}

export default Home