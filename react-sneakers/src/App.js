// import logo from '../public/img/icon-logo.svg';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context';


function App() {
  const [items, setItems] = React.useState([]);
  const [cardItems, setCardItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cardOpened, setCardOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // fetch('https://64f8c8d6824680fd21800ccb.mockapi.io/Items').then(res => {
    //   return res.json();
    // }).then(json => {setItems(json)});

    async function fetchData() {
      // setIsLoading(true);
      const cartResponse = await axios.get('https://64f8c8d6824680fd21800ccb.mockapi.io/Card');
      const favoritesResponse = await axios.get('https://64ffffb718c34dee0cd4208d.mockapi.io/Favorites');
      const itemsResponse = await axios.get('https://64f8c8d6824680fd21800ccb.mockapi.io/Items');

      setIsLoading(false);
      setItems(itemsResponse.data);
      setCardItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCard = (obj) => {
    try {
      if (cardItems.find(item => item.id === obj.id)) {
        axios.delete(`https://64f8c8d6824680fd21800ccb.mockapi.io/Card/${obj.id}`);
        setCardItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)));
      } else {
        axios.post('https://64f8c8d6824680fd21800ccb.mockapi.io/Card', obj);
        setCardItems(prev => [...prev, obj]);
      }
    } catch {
      alert('Не удалось добавить в корзину');
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://64ffffb718c34dee0cd4208d.mockapi.io/Favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => item.id !== obj.id));
      } else {
        // axios.post('https://64ffffb718c34dee0cd4208d.mockapi.io/Favorites', obj); // Change!!
        const {data} = await axios.post('https://64ffffb718c34dee0cd4208d.mockapi.io/Favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
    
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://64f8c8d6824680fd21800ccb.mockapi.io/Card/${id}`);
    setCardItems(prev => prev.filter(item => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cardItems.some((obj) => obj.id === id);
  }

  return (
    <AppContext.Provider value={{items, cardItems, favorites, isItemAdded, onAddToFavorite, onAddToCard, setCardOpened, setCardItems, cardItems}}>
      <div className='wrapper clear'>
        {cardOpened && <Drawer items={cardItems} onClose={() => setCardOpened(false)} onRemove={onRemoveItem}/>}
        <Header onClickCard={() => setCardOpened(true)}/>


        <Routes>
          <Route path="/" element={
            <Home
              items={items}
              cardItems={cardItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              isLoading={isLoading}
            />}
          />
        </Routes>

        <Routes>
          <Route path="/favorites" element={
            <Favorites
                // items={favorites}
                // onAddToFavorite={onAddToFavorite}
                // onAddToCard={onAddToCard}
            />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
