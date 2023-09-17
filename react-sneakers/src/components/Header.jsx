import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export function Header(props) {
  const {totalPrice} = useCart();

    return (
        <header className='d-flex justify-between align-center p-40'>
          <Link to='Sneakers/'>
            <div className='d-flex align-center'>
              <img width={40}
                height={40} 
                src='img/icon-logo.svg' 
                alt="icon-logo"
              />
              <div>
                <h3>REACT SNEAKERS</h3>
                <p className='opacity-5'>Магазин лучших кроссовок</p>
              </div>
            </div>
          </Link>

        <ul className='d-flex'>
          <li className='mr-30 cu-p' onClick={props.onClickCart}>
            <img 
              width={18} 
              height={18} 
              src='img/icon-basket-buy.svg' 
              alt="icon-basket-buy"
            />
            <span>{totalPrice} руб.</span>
          </li>
          <li className='mr-15 cu-p'>
            <Link to='Sneakers/favorites'>
              <img 
                width={20} 
                height={20} 
                src='img/icon-heart.svg' 
                alt="icon-favorite"
              />
            </Link>
          </li>
          <li>
            <Link to='Sneakers/orders'>
              <img 
                width={20} 
                height={20} 
                src='img/icon-user.svg' 
                alt="icon-user"
              />
            </Link>
          </li>
        </ul>
      </header>
    )
}
