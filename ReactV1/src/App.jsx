import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardTest from "./Components/CardTest/CardTest";
import Button from '@mui/material/Button';

function App() {
  const [count, setCount] = useState(10)

  const nombres = ["Juan", "Pedro", "Maria", "Luis"];

  const increment = () => {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Hola Mundo</h1>
      <Button variant="contained" onClick={increment}> Estado {count}</Button>
      {
        nombres.map((nombre) => (
          <CardTest  key={nombre} nombrePintar={nombre} />        
        ))
      }
      <CardTest />
      <CardTest />
      <CardTest />
    </>
  )
}

export default App
