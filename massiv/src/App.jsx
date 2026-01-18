import { useState, useRef, useEffect } from 'react'
import './App.css'
import'./components/wind/Wind.jsx'
import Wind from './components/wind/Wind.jsx'

function App() {

  let [bible, setBible] = useState([])
  let filter = useRef(
    {
      "increase" : true,
      "dis" : false
  }
)

  useEffect(() => {
    fetch('./products.json')
    .then(res => res.json())
    .then(data => {
      setBible(data.models)
    })
    .catch(error => console.error('Ошибка загрузки:', error))
  }, [])

  function change_dis(event) {
    filter.current["dis"] = event.target.checked
    changer()
  }

  function change_increase(el) {
    filter.current["increase"] = el.target.value
    changer()
  }

  // function changer() {
  //   if (filter["increase"] === true) {

  //   } else {

  //   }

  //   if (filter['dis'] === true) {

  //   } else {
      
  //   }
  // }

  return (
    <>
   <header>
    <select name="filter" onChange={change_increase}>
      <option value="increase">Цена по возростанию</option>
      <option value="decrease">Цена по убыванию</option>
    </select>
      <input type="checkbox" id="sale-only" onChange={change_dis}/>
      <label htmlFor="sale-only">только со скидкой</label>
    </header>
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
        />)) : <p className='loading-text'>Загрузка...</p>}
      </>
    </>
  )
}

export default App
