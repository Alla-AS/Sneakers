function Drawer({onClose, onRemove, items = []}) {
  return (
    <div className='overlay'>
      <div className='drawer'>
        <h2 className='mb-30 d-flex justify-between'>
          Корзина <img onClick={onClose} className='remove-btn cu-p' src='/img/btn-remove-cursor.svg' alt='btn-remove'/>
        </h2>


        <div className='items'>
          {
            items.map((obj) => (
              <div className='cart-item d-flex align-center mb-20'>
                <div style={{backgroundImage: `url(${obj.imageUrl})`}} className='cart-item__img'></div>
                <div className='mr-20 flex'>
                  <p className='mb-5'>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img onClick={() => onRemove(obj.id)} className='remove-btn' src='/img/btn-remove-cursor.svg' alt='btn-remove'/>
              </div>
            ))
          }            
        </div>
        <div className='cartTotalBlock'>
          <ul>
            <li className='d-flex'>
                <span>Итого</span>
                <div></div>
                <b>21 498 руб. </b>
            </li>
            <li className='d-flex'>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
            </li>
          </ul>
          <button className='greenButton'>Оформить заказ <img src='/img/icon-arrow.svg' alt='icon-arrow'/></button>
        </div>  
      </div>
    </div>
  )
}

export default Drawer;