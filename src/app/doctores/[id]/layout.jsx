// import Link from 'next/link'
import { AgendarCitaButton } from '@/app/components/AgendarCitaButton'
import Image from 'next/image'
import 'style/DoctorProfile.css'
// const fetchSingleDoctor = (id) => {
//   // incremental static regeneration
//   // Lo que hace es que cada X tiempo sí ha recibido una request, revalidaria y haria un nuevo FETCH para regenerar el archivo
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     next: {
//       revalidate: 60
//     }
//   })
//     .then(res => res.json())
// }

export default async function Doctor () {
//   const { id } = params
  // const post = awain fetchSingleDoctor(id)
  return (
    <div className='doctor-profile'>
      <div className='doctor-foto-container'>
        <Image priority className='doctor-foto' width='300' height='300' alt='foto del doctor' src='https://i.pinimg.com/originals/d8/51/0c/d8510c655f4920823b79aed1937dc98e.jpg' />
      </div>
      <h2 className='doctor-name'>Gregory House</h2>
      <p className='doctor-specialty'><b>Especialidad:</b> Nefrología, infectología</p>
      <p className='doctor-title'><b>Título:</b> Médico; especialista en nefrología y enfermedades infecciosas</p>
      <p className='doctor-occupation'><b>Ocupación:</b> Jefe del departamento de diagnóstico</p>
      <p className='doctor-location'><b>Lugar de trabajo:</b> Hospital Universitario Princeton-Plainsboro</p>
      <AgendarCitaButton />
    </div>
  )
}
// { children, params }
// <article>
//   <h1> xs </h1>
//   <p> dw </p>
//   <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
//   {children}
// </article>
