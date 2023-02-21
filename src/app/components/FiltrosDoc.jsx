'use client'
import Form from 'react-bootstrap/Form'
// Traer las categorias desde la API
export function Filtros () {
  return (
    <>
      <div className='filtros-container'>
        <div className='categoria'>
          <h3>Ubicación</h3>
          <div className='opciones-container'>
            <Form.Check label='cat' aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
          </div>
        </div>
        <div className='categoria'>
          <h3>Categoria/Especialidad</h3>
          <div className='opciones-container'>
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
          </div>
        </div>
        <div className='categoria'>
          <h3>Precio</h3>
          <div className='opciones-container'>
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
            <Form.Check aria-label='option 1' />
          </div>
        </div>
      </div>
    </>
  )
}
