import React from 'react';
import {Card} from '../components/Card';

export function Home({items,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    isLoading}) {

    const renderItems = () => {
        const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
        return (isLoading ? [1, 2, 3, 4, 5, 6, 7, 8] : filtredItems).map((item) => (
            <Card 
                key={isLoading ? item : `${item.id}home`}
                loading={isLoading}
                {...item}
            />
        ));
    };
        
    return (
        <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"`: 'Все кроссовки'}</h1>
            <div className='search-block d-flex'>
                <img src='img/icon-search.svg' alt='Search'/>
                {searchValue && 
                <img 
                    onClick={() => setSearchValue('')} 
                    className='clear cu-p' 
                    src='img/btn-remove-cursor.svg' 
                    alt='btn-clear'
                />}
                <input 
                    onChange={onChangeSearchInput} 
                    value={searchValue} 
                    placeholder='Поиск...'
                />
            </div>
            </div>
            <div className='cards d-flex'>
                {renderItems()}
            </div>
        </div>
    )
}
