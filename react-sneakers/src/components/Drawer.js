function Drawer(props) {
    return (
        <div className='overlay'>
        <div className='drawer'>
          <h2 className='mb-30 d-flex justify-between'>
            Корзина <img onClick={props.onClose} className='remove-btn cu-p' src='/img/btn-remove-cursor.svg' alt='btn-remove'/>
          </h2>


          <div className='items'>
            <div className='cart-item d-flex align-center mb-20'>
              {/* <img className='mr-20' width={70} height={70} src='/img/sneakers/1.jpg' alt='foto-sneakers'/> */}
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg'}} className='cart-item__img'></div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='remove-btn' src='/img/btn-remove-cursor.svg' alt='btn-remove'/>
            </div>

            <div className='cart-item d-flex align-center mb-20'>
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg'}} className='cart-item__img'></div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='remove-btn' src='/img/btn-remove-cursor.svg' alt='btn-remove'/>
            </div>

            <div className='cart-item d-flex align-center mb-20'>
              {/* <img className='mr-20' width={70} height={70} src='/img/sneakers/1.jpg' alt='foto-sneakers'/> */}
              <div style={{backgroundImage: 'url(/img/sneakers/1.jpg'}} className='cart-item__img'></div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className='remove-btn' src='/img/btn-remove-cursor.svg' alt='btn-remove'/>
            </div>
            
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