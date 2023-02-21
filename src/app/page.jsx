
// import { Col, Row, Card, Button } from 'react-bootstrap'
import 'style/Home.css'
import 'style/DocCard.css'
import DocCard from './components/DocCard'
import { Filtros } from './components/FiltrosDoc'
import 'style/FiltrosDoc.css'

export default function Home () {
  return (
    <main className=''>
      <div className='main-container'>
        <Filtros />
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
