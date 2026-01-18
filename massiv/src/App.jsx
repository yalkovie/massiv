import { useState, useRef, useEffect } from 'react'
import './App.css'
import'./components/wind/Wind.jsx'
import Wind from './components/wind/Wind.jsx'

function App() {

  let [bible, setBible] = useState([])
  let mainBible = useRef(null)
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
      mainBible.current = data.models
      setBible(mainBible.current)
    })
    .catch(error => console.error('Ошибка загрузки:', error))
  }, [])

  function change_dis(event) {
    filter.current["dis"] = event.target.checked
    changer()
  }

  function change_increase(event) {
    filter.current["increase"] = event.target.value == 'increase'
    changer()
  }

  function changer() {
    let productList = [...mainBible.current ]
    if (filter.current['dis']) { /*чекбокс*/
      productList = productList.filter(el => el.discountPercentage > 0)
    }

    productList = productList.sort((a, b) => {
        if (filter.current['increase']) {
          return (a.price - a.price * a.discountPercentage * 0.01) - (b.price - b.price * b.discountPercentage * 0.01)
        } else {
          return (b.price - b.price * b.discountPercentage * 0.01) - (a.price - a.price * a.discountPercentage * 0.01)
        }
    })

    setBible(productList)
  }


  return (
    <>
   <header>
    <select name="filter" onChange={change_increase}>
      <option value="increase">Цена по возрастанию</option>
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
