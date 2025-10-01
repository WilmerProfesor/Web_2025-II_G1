import { useState, useEffect } from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import CardSection from './Components/CardSection/CardSection'
import AccordionSection from './Components/AccordionSection/AccordionSection'
import './App.css'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

// const data = [
//   { title: 'Card 1XXXXX', content: 'Content for card 1' },
//   { title: 'Card 2', content: 'Content for card 2' },
//   { title: 'Card 3', content: 'Content for card 3' }
// ]

const App = () => {
  const [variable, setVariable] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => 
        setVariable(data.results)        
      );
  }, [])


return (
  <>
    <Header />
    <div id='contenedorBotonTmp'>
      <Button variant="contained" onClick={() => setVariable([])}>Cambio</Button>
    </div>
    <main>
      <section id='cards-news'>
        {/* <CardSection data={variable} /> */}
        {variable.length > 0 ?
          variable.map((item)=>{
            return <CardSection data={item} />
          })          
          : <CircularProgress />}
      </section>
      <section id='accordion-news'>
        <AccordionSection />
      </section>
    </main>
    <Footer />
  </>
)
}

export default App
