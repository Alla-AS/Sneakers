import React from 'react';
import Card from '../components/Card';
// import AppContext from '../context';

function Home({items,
    cardItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToFavorite,
    onAddToCard,
    isLoading}) {

        // const {isItemAdded} = React.useContext(AppContext);

        const renderItems = () => {
            const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
            return (isLoading ? [1, 2, 3, 4, 5, 6, 7, 8] : filtredItems).map((item) => (
                <Card 
                    // onPlus={(obj) => onAddToCard(obj)}
                    // onFavorite={(obj) => onAddToFavorite(obj)}
                    key={item.id}
                    // added={isItemAdded(item && item.id)}
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
                    <img src='/img/icon-search.svg' alt='Search'/>
                    {searchValue && <img onClick={() => setSearchValue('')} className='clear cu-p' src='/img/btn-remove-cursor.svg' alt='btn-clear'/>}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...'/>
                </div>
                </div>
                <div className='cards d-flex'>
                    {renderItems()}
                </div>
            </div>
    )
}


export default Home;