import {useState, useEffect} from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import CardSection from './Components/CardSection/CardSection'
import AccordionSection from './Components/AccordionSection/AccordionSection'
import './App.css'
import Button from '@mui/material/Button';


const App=() =>{
  const [variable, setVariable] = useState('Cualquier joda')

  // useEffect( ()=>{}, [] )  

  return (
    <>
      <Header/>
      <div id='contenedorBotonTmp'>
        <Button variant="contained" onClick={()=> setVariable('Nuevo valor')}>Cambio</Button>        
      </div>      
      <main>
        <section id='cards-news'>
          <CardSection data={{ title: 'Card 1', content: 'Content for card 1' }} />
          <CardSection data={{ title: variable, content: 'Content for card 2' }} />
        </section>
        <section id='accordion-news'>
          <AccordionSection/>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App
