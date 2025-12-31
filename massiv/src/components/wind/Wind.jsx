import './Wind.css'

function Wind({pic, title, brand, type, mm, distance, cost, dscrp, discount}) {
    return(
        <>
        <div className='product'>
            <img src={'./images/' + pic}/>
            <h2>{title}</h2>
            <p className='info'>Производитель: <span>{brand}</span></p>
            <p className='info'>Тип: <span>{type}</span></p>
            <p className='info'>Апертура: <span>{mm}</span>мм</p>
            <p className='info'>Фокусное расстояние: <span>{distance}</span>мм<span className='saleSize'>{discount}</span></p>
            <p className='price'>Цена: <span>{cost}</span>$</p>
            <p className='description'>{dscrp}</p>
        </div>
        </>
    )
}

export default Wind