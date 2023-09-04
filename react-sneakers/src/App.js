// import logo from '../public/img/icon-logo.svg';
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';
// import './App.css';

const arr = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999',
    imageUrl: '/img/sneakers/1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '14 999',
    imageUrl: '/img/sneakers/2.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499',
    imageUrl: '/img/sneakers/3.jpg'
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999',
    imageUrl: '/img/sneakers/4.jpg'
  }
]

function App() {
  return (
    <div className='wrapper clear'>
      <div>
        <button
      </div>
      <Drawer/>

      <Header/>
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
        
          <div className='search-block d-flex'>
            <img src='/img/icon-search.svg' alt='Search'/>
            <input placeholder='Поиск...'/>
          </div>
        </div>
        

        <div className='cards d-flex'>
          {arr.map(obj => 
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
