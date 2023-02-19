'use client'
// import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Col from 'react-bootstrap/Col'
// Añadir los demas links y rutas
const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'Login',
  route: '/login'
}, {
  label: 'Register',
  route: '/register'
}
]

export function Navigation () {
  return (
    <>
      <Navbar sticky='top' bg='light' variant='light'>
        <Container fluid>
          <Col>
            <Navbar.Brand href='/'>Suma</Navbar.Brand>
          </Col>
          <Col>

            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
              <Nav
                className='me-auto my-2 my-lg-0'
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {links.map(({ label, route }) => (
                  <Nav.Link key={route} href={route}>{label}</Nav.Link>
                ))}
                <NavDropdown title='Doctores' id='navbarScrollingDropdown'>
                  <NavDropdown.Item href='/doctores/pediatras'>Pediatras</NavDropdown.Item>
                  <NavDropdown.Item href='/doctores/cirujanos'>
                    Cirujanos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='/doctores'>
                    Todas las areas
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

            </Navbar.Collapse>
          </Col>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Container>
      </Navbar>
    </>
  )
}

// {links.map(({ label, route }) => (
//   <Nav variant='pills' key={route} className='me-auto'>
//     <Nav.Link href={route}>{label}</Nav.Link>
//   </Nav>
// ))}
