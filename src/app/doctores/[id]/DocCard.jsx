'use client'
import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'
// import { Col, Row } from 'react-bootstrap'
import { AgendarCitaButton } from '@/app/components/AgendarCitaButton'
// traer los datos de la Api
export default function DocCard () {
  return (
    <>
      <Card className='doctor-cart' style={{}}>
        <Card.Img variant='top' src='scx' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <AgendarCitaButton />
          {/* <Button variant='primary'>Go somewhere</Button> */}
        </Card.Body>
      </Card>

    </>
  )
}
