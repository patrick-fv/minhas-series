import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
    Navbar, 
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    NavbarBrand } from 'reactstrap'
  
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }
  
    return (
      <div>
        <Navbar color='light' light expand='md'>
            <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className='mr-auto' navbar>
                <NavItem>
                    <NavLink tag={Link} to='/generos' >Genêros</NavLink>
                </NavItem>
                </Nav>
          </Collapse>
        </Navbar>
      </div>
    )  
}

export default Header