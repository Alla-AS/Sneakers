import React from "react";
import axios from "axios";

import Info from "../Info";
import { useCart } from "../../hooks/useCart";

import styles from './Drawer.module.scss'

function Drawer({onClose, onRemove, items = [], opened}) {
  const {cartItems, setCartItems, totalPrice} = useCart();
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);


  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

 


  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const {data} = await axios.post('https://64ffffb718c34dee0cd4208d.mockapi.io/Orders', {items: cartItems});
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://64f8c8d6824680fd21800ccb.mockapi.io/Cart/${item.id}`);
        await delay(1000);
      }
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
    } catch (error) {
      alert('Не удалось создать заказ');
    }
    setIsLoading(false);

  }

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className='mb-30 d-flex justify-between'>
          Корзина <img onClick={onClose} className='remove-btn cu-p' src='/img/btn-remove-cursor.svg' alt='btn-remove'/>
        </h2>

        {items.length > 0 ? (
        <div className="d-flex flex-column flex">
        <div className='items flex'>
          {
            items.map((obj) => (
              <div key={obj.id} className='cart-item d-flex align-center mb-20'>
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
                <b>{totalPrice} руб. </b>
            </li>
            <li className='d-flex'>
                <span>Налог 5%: </span>
                <div></div>
                <b>{(totalPrice*0.05).toFixed(2)} руб. </b>
            </li>
          </ul>
          <button disabled={isLoading} onClick={onClickOrder} className='greenButton'>Оформить заказ <img src='/img/icon-arrow.svg' alt='icon-arrow'/></button>
        </div>
      </div>
      ) : (<Info title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
          description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
          image={isOrderComplete ? '/img/complete-order.jpg' : '/img/empty-cart.jpg'}
          />
      )}

          
      </div>
    </div>
  )
}

export default Drawer;