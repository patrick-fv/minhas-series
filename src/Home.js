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

const Card = ({ logo, title, info, link }) => {
  return (
    <div className='col-lg-3 col-md-6 mb-4'>
      <div className='card h-100'>
        <img className='card-img-top' src={logo} alt=''/>
        <div className='card-body'>
          <h4 className='card-title'>{title}</h4>
          <p className='card-text'>{info}</p>
        </div>
        <div className='card-footer'>
          <a className='btn btn-primary' href={link}>Ver Mais</a>
        </div>
      </div>
    </div>
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