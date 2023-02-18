'use client'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function NameRegister () {
  return (
    <>
      <Form>
        <Form.Label>Nombre y Apellido</Form.Label>
        <Row>
          <Col>
            <Form.Control id='first-name' placeholder='First name' />
          </Col>
          <Col>
            <Form.Control id='last-name' placeholder='Last name' />
          </Col>
        </Row>
      </Form>
    </>
  )
}
