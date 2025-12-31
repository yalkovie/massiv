import { useState, useRef, useEffect } from 'react'
import './App.css'
import'./components/wind/Wind.jsx'
import Wind from './components/wind/Wind.jsx'

function App() {

  let [bible, setBible] = useState([])

  useEffect(() => {
    fetch('./products.json')
    .then(res => res.json())
    .then(data => {
      setBible(data.models)
    })
    .catch(error => console.error('Ошибка загрузки:', error))
  }, [])

  return (
    <>
      { bible.length > 0 ? bible.map(el => (<Wind 
        key={el.id}
        pic={el.image}
        title={el.name}
        brand={el.brand}
        type={el.type}
        mm={el.focalLength}
        distance={el.lensDiameter}
        cost={el.price}
        dscrp={el.description}
        discount={el.discountPercentage}
      />)) : <p className='loading-text'>Загрузка данных...</p>}
    </>
  )
}

export default App
