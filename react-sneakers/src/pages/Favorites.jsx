import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';


function Favorites() {
    const {favorites} = React.useContext(AppContext);
    return (
        <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Мои закладки</h1>
            </div>
            <div className='cards d-flex'>
                {favorites.map(item => 
                <Card 
                    key={item.id + 'fav'}
                    favorited={true}
                    {...item}
                />
                )}
            </div>
        </div>
    )
}


export default Favorites;