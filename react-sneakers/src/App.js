// import logo from '../public/img/icon-logo.svg';
import React from 'react';
import axios from 'axios';
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';
// import './App.css';


function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cardOpened, setCardOpened] = React.useState(false);

  React.useEffect(() => {
    // fetch('https://64f8c8d6824680fd21800ccb.mockapi.io/Items').then(res => {
    //   return res.json();
    // }).then(json => {setItems(json)});

    axios.get('https://64f8c8d6824680fd21800ccb.mockapi.io/Items').then(res => setItems(res.data));
    axios.get('https://64f8c8d6824680fd21800ccb.mockapi.io/Card').then(res => {setCardItems(res.data)});
  }, []);

  const onAddToCard = (obj) => {
    axios.post('https://64f8c8d6824680fd21800ccb.mockapi.io/Card', obj);
    setCardItems(prev => [...prev, obj]);
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://64f8c8d6824680fd21800ccb.mockapi.io/Card', obj); // Change!!
    setFavorites(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://64f8c8d6824680fd21800ccb.mockapi.io/Card/${id}`);
    setCardItems(prev => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }


  return (
    <div className='wrapper clear'>
      {cardOpened && <Drawer items={cardItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCard={() => setCardOpened(true)}/>
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
        
          <div className='search-block d-flex'>
            <img src='/img/icon-search.svg' alt='Search'/>
            {searchValue && <img onClick={() => setSearchValue('')} className='clear cu-p' src='/img/btn-remove-cursor.svg' alt='btn-clear'/>}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'/>
          </div>
        </div>
        

        <div className='cards d-flex'>
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => 
            <Card 
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCard(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
              key={item.imageUrl}
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
