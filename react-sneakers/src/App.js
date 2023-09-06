// import logo from '../public/img/icon-logo.svg';
import React from 'react';
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';
// import './App.css';


function App() {
  const [items, setItems] = React.useState([]);
  const [cardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://64f8c8d6824680fd21800ccb.mockapi.io/Items').then(res => {
      return res.json();
    }).then(json => {setItems(json)});
  }, []);


  return (
    <div className='wrapper clear'>
      {cardOpened && <Drawer onClose={() => setCardOpened(false)}/>}
      <Header onClickCard={() => setCardOpened(true)}/>
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
        
          <div className='search-block d-flex'>
            <img src='/img/icon-search.svg' alt='Search'/>
            <input placeholder='Поиск...'/>
          </div>
        </div>
        

        <div className='cards d-flex'>
          {items.map(obj => 
            <Card 
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={() => console.log('Нажали плюс')}
              onFavorite={() => console.log('Добавили в закладки')}
              // key={obj.imageUrl}
            />
          )}

{/* 
          <div className='card'>
            <div className='favorite'>
              <img src='/img/icon-heart-unlike.svg' alt='icon-heart-unlike'/>
            </div>
            <img width={133} height={112} src='/img/sneakers/2.jpg' alt=''></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='icon-plus'></img>
              </button>
            </div>
          </div>

          <div className='card'>
            <div className='favorite'>
              <img src='/img/icon-heart-unlike.svg' alt='icon-heart-unlike'/>
            </div>
            <img width={133} height={112} src='/img/sneakers/3.jpg' alt=''></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='icon-plus'></img>
              </button>
            </div>
          </div>

          <div className='card'>
            <div className='favorite'>
              <img src='/img/icon-heart-unlike.svg' alt='icon-heart-unlike'/>
            </div>
            <img width={133} height={112} src='/img/sneakers/4.jpg' alt=''></img>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img width={11} height={11} src='/img/plus.svg' alt='icon-plus'></img>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
