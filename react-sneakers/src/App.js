import React from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Drawer from './components/Drawer/index';
import AppContext from './context';
import Orders from './pages/Orders';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get('https://64f8c8d6824680fd21800ccb.mockapi.io/Cart'),
          axios.get('https://64ffffb718c34dee0cd4208d.mockapi.io/Favorites'),
          axios.get('https://64f8c8d6824680fd21800ccb.mockapi.io/Items')
        ]);

        setIsLoading(false);
        setItems(itemsResponse.data);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(item => item.parentId === obj.id);
      if (findItem) {
        setCartItems(prev => prev.filter(item => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://64f8c8d6824680fd21800ccb.mockapi.io/Cart/${findItem.id}`);
      } else {
        // setCartItems(prev => [...prev, obj]);
        const {data} = await axios.post('https://64f8c8d6824680fd21800ccb.mockapi.io/Cart', obj);
        setCartItems(prev => [...prev, data]);
        //   setCartItems(prev => prev.map((item) => {
        //   if (item.parentId === data.parentId) {
        //     return {
        //       ...item,
        //       id: data.id
        //     };
        //     return item;
        //   }
        // }
        // ));
      }
    } catch (error) {
      alert('Не удалось добавить в корзину');
      console.error(error);
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(item => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://64ffffb718c34dee0cd4208d.mockapi.io/Favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => item.id !== obj.id));
      } else {
        const {data} = await axios.post('https://64ffffb718c34dee0cd4208d.mockapi.io/Favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://64f8c8d6824680fd21800ccb.mockapi.io/Cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
    }  catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some((obj) => obj.parentId === id);
  }

  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems, cartItems}}>
      <div className='wrapper clear'>
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened}/>
        <Header onClickCart={() => setCartOpened(true)}/>


        <Routes>
          <Route path="/" element={
            <Home
              items={items}
              cartItems={cartItems}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              isLoading={isLoading}
            />}
          />
        </Routes>

        <Routes>
          <Route path="/favorites" element={
            <Favorites/>}
          />
        </Routes>

        <Routes>
          <Route path='/orders' element={
            <Orders/>
          }/>
        </Routes>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
