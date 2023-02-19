
// import { Col, Row, Card, Button } from 'react-bootstrap'
import 'style/Home.css'
import 'style/DocCard.css'
import DocCard from './doctores/[id]/DocCard'

export default function Home () {
  return (
    <main className=''>
      <div className=''>
        <h1>Hola, Estas en Home</h1>
        <div className='doctor-cards-container'>
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
        </div>
      </div>
    </main>
  )
}
