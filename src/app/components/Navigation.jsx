'use client'
// import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Login',
  route: '/Login'
}, {
  label: 'Register',
  route: '/register'
}
]

export function Navigation () {
  return (
    <>
      <Navbar sticky='top' bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>Suma</Navbar.Brand>

          {links.map(({ label, route }) => (
            <Nav key={route} className='me-auto'>
              <Nav.Link href={route}>{label}</Nav.Link>
            </Nav>
          ))}

        </Container>
      </Navbar>
    </>
  )
}
