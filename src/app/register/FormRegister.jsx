'use client'
import Form from 'react-bootstrap/Form'

import { ButtonRegister } from './ButtonRegister.jsx'
import { NameRegister } from './NameRegister.jsx'

export function FormRegister () {
  return (
    <div>
      {/* sin el as da muchos errores */}
      <Form as='div'>
        <Form.Group className='mb-3'>
          <NameRegister />
          <Form.Label>Email address</Form.Label>
          <Form.Control id='email-input' type='email' placeholder='@gmail.com | @hotmail.com | @yahoo.com' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' id='formBasicPassword'>
          <Form.Label id='pass'>Password</Form.Label>
          <Form.Control type='password' placeholder='' />
        </Form.Group>
        <Form.Group className='mb-3' id='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Acepto los terminos y condiciones' />
        </Form.Group>
        <ButtonRegister />
      </Form>
    </div>
  )
}
