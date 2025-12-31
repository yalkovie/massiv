import './Wind.css'

function Wind({pic, title, brand, type, mm, distance, cost, dscrp, discount}) {

    function getPrice() {
        if (discount === 0) {
            return cost.toFixed(2)
        } else {
            return (cost - cost * (0.01 * discount)).toFixed(2)
        }
    }

    return(
        <>
        <div className='product'>
            <img src={'./images/' + pic}/>
            <h2>{title}</h2>
            <p className='info'>Производитель: <span>{brand}</span></p>
            <p className='info'>Тип: <span>{type}</span></p>
            <p className='info'>Апертура: <span>{distance}</span>мм</p>
            <p className='info'>Фокусное расстояние: <span>{mm}</span>мм</p>
            <p className='price'>
                Цена: <span>{getPrice()}</span>$
                {
                discount === 0 ? null : <span className='saleSize'>{"-" + discount + "%"}</span>
                }
                </p>
            <p className='description'>{dscrp}</p>
        </div>
        </>
    )
}

export default Wind