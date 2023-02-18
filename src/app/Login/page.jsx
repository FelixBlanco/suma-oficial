import 'style/Login.css'

import { FormLogin } from './FormLogin.jsx'

export default function Login () {
  return (
    <main className=''>
      <div className=''>
        <h1>Hola, Estas en Login</h1>
        <div className='container-form-login'>

          <FormLogin />

        </div>

      </div>
    </main>
  )
}

/// //////////////////////////////////////////
// Los componentes con interactividad se renderizan en el cliente
// por eso hay que separarlos
