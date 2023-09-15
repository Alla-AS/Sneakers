import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';


function Favorites() {
    const {favorites, onAddToFavorite, onAddToCart} = React.useContext(AppContext);
    return (
        <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
            <h1>Мои закладки</h1>

            </div>
            <div className='cards d-flex'>
                {favorites.map(item => 
                <Card 
                    // title={item.title}
                    // price={item.price}
                    // imageUrl={item.imageUrl}
                    onPlus={(obj) => onAddToCart(obj)}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    key={item.imageUrl}
                    favorited={true}
                    {...item}
                />
                )}
            </div>
        </div>
    )
}


export default Favorites;