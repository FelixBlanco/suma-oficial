'use client'
import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'
// import { Col, Row } from 'react-bootstrap'
import { AgendarCitaButton } from '@/app/components/AgendarCitaButton'
import Image from 'next/image'
import 'style/DoctorProfile.css'
// traer los datos de la Api
export default function DocCard () {
  return (
    <>
      <Card className='doctor-cart' style={{}}>
        {/* <Card.Img variant='top' src='scx' /> */}
        <Image priority className='doctor-foto' width='100' height='100' alt='foto del doctor' src='https://i.pinimg.com/originals/d8/51/0c/d8510c655f4920823b79aed1937dc98e.jpg' />
        <Card.Body>
          <Card.Title>Gregory House</Card.Title>
          <Card.Text><b>Especialidad:</b> Nefrología, infectología</Card.Text>

        </Card.Body>
        <div>
          <p className='doctor-location'><b>Lugar de trabajo:</b> Hospital Universitario Princeton-Plainsboro</p>
          <AgendarCitaButton />
          {/* <Button variant='primary'>Go somewhere</Button> */}
        </div>
      </Card>

    </>
  )
}
