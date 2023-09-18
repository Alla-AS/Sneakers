import React from 'react';
import {Route, Routes} from 'react-router-dom';
import axios from 'axios';
import {Home} from './pages/Home';
import {Favorites} from './pages/Favorites';
import {Header} from './components/Header';
import {Drawer} from './components/Drawer/index';
import AppContext from './context';
import {Orders} from './pages/Orders';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const urlItems = 'https://64f8c8d6824680fd21800ccb.mockapi.io/Items'
  const urlCart = 'https://64f8c8d6824680fd21800ccb.mockapi.io/Cart';
  const urlFavorites = 'https://64ffffb718c34dee0cd4208d.mockapi.io/Favorites';

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] = await Promise.all([
          axios.get(urlCart),
          axios.get(urlFavorites),
          axios.get(urlItems)
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


  const onAdd = async (obj, kit, setKit, url, strError) => {
    try {
      const key = obj.parentId ? 'parentId' : 'id';
      const findItem = kit.find(item => item.parentId === obj[key]);
      if (findItem) {
        setKit(prev => prev.filter(item => Number(item.parentId) !== Number(obj[key])));
        await axios.delete(`${url}/${findItem.id}`);
      } else {
        const {data} = await axios.post(`${url}`, obj);
        setKit(prev => [...prev, data]);
      }
    } catch (error) {
      alert(`Ошибка при добавлении в ${strError}`);
      console.error(error);
    }
  }

  const onAddToCart = (obj) => onAdd(obj, cartItems, setCartItems, urlCart, 'корзину');
  const onAddToFavorite = (obj) => onAdd(obj, favorites, setFavorites, urlFavorites, 'в фавориты');

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

  const isAdded = (id, items) => {
    return items.some((obj) => obj.parentId === id);
  }

  const isItemAdded = (id) => isAdded(id, cartItems);
  const isFavoritesAdded = (id) => isAdded(id, favorites);
  
  return (
    <AppContext.Provider value={{items, cartItems, favorites, isItemAdded, isFavoritesAdded, onAddToFavorite, onAddToCart, setCartOpened, setCartItems}}>
      <div className='wrapper clear'>
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} opened={cartOpened} urlCart={urlCart}/>
        <Header onClickCart={() => setCartOpened(true)}/>

        <Routes>
          <Route path="Sneakers/" element={
            <>
              <div className='heading'>
                <img src='img/heading.jpg' alt='heading'/>
                <img src='img/heading-mobile.jpg' alt='heading-mobile'/>
              </div>
              
              <Home
                items={items}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                isLoading={isLoading}
              />
            </>
          }/>
          <Route path="Sneakers/favorites" element={
            <Favorites/>
          }/>
          <Route path='Sneakers/orders' element={
            <Orders/>
          }/>
        </Routes>
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
