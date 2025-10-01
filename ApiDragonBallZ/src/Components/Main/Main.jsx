import { useState, useEffect } from 'react'
import './Main.css'
import CardCharacter from '../CardCharacter/CardCharacter'

// const characters = [
//     {
//         id: 1,
//         name: 'Goku',
//         description: 'Goku es el protagonista principal de la serie Dragon Ball. Es un Saiyajin criado en la Tierra y conocido por su personalidad alegre y su amor por las peleas. A lo largo de la serie, Goku busca volverse más fuerte y proteger a sus seres queridos de diversas amenazas.'
//     },
//     {
//         id: 2,
//         name: 'Vegeta',        
//         description: 'Vegeta es el príncipe de los Saiyajin y uno de los personajes principales de la serie. Inicialmente un antagonista, Vegeta se convierte en un aliado de Goku y lucha junto a él para proteger la Tierra. Es conocido por su orgullo, determinación y rivalidad con Goku.'
//     },
//     {
//         id: 3,
//         name: 'Piccolo',
//         image: "https://dragonball-api.com/characters/picolo_normal.webp"  ,      
//         description: 'Piccolo es un Namekiano y uno de los personajes más importantes de la serie. Originalmente un villano, Piccolo se convierte en un aliado de Goku y sus amigos. Es conocido por su sabiduría, habilidades de combate y su capacidad para regenerarse.'
//     }
// ]

const Main = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://dragonball-api.com/api/characters')
            .then(response => response.json())
            .then(data => setCharacters(data.items));
    }, [])


    return (
        <main>
            {characters.length > 0 ? 
                characters.map(
                    item => (
                        <CardCharacter key={item.id} character={item} />
                    )
                ) : <p>No hay Personajes para mostrar...</p>
                }
        </main>
    )
}

export default Main