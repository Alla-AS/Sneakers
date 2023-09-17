import React from 'react';
import {Card} from '../components/Card';
import {Info} from '../components/Info';
import AppContext from '../context';


export function Favorites() {
    const {favorites} = React.useContext(AppContext);
    return (
        <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
                <h1>Мои закладки</h1>
            </div>
            {favorites.length > 0 ? 
                <div className='cards d-flex'>
                    {favorites.map(item => 
                    <Card 
                        key={item.id + 'fav'}
                        favorited={true}
                        {...item}
                    />)}
                </div> :
                <div className='info-favorites'>
                    <Info 
                        title={'Закладок нет :('}
                        description={'Вы ничего не добавляли в закладки'}
                        image={'img/smile-favorites.jpg'}
                        link={'Sneakers/'}
                    />
                </div>
            }
        </div>
    )
}
