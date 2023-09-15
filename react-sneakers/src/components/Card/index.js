import React from 'react';
import ContentLoader from "react-content-loader"
import AppContext from '../../context';


import styles from './Card.module.scss';


function Card({id, parentId, title, price, imageUrl, favorited = false, loading = false, isOrder = false}) {
    const { isItemAdded, isFavoritesAdded, onAddToFavorite, onAddToCart } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = {id, parentId: (parentId !== undefined ? parentId : id), title, price, imageUrl}

    const onClickPlus = () => {
        onAddToCart(obj);
    };

    const onClickFavorite = () => {
        onAddToFavorite(obj);
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            {loading ? <ContentLoader 
                    speed={2}
                    width={150}
                    height={188}
                    viewBox="0 0 150 188"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    >
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="90" /> 
                    <rect x="0" y="105" rx="10" ry="10" width="150" height="15" /> 
                    <rect x="0" y="125" rx="10" ry="10" width="100" height="15" /> 
                    <rect x="118" y="152" rx="10" ry="10" width="32" height="32" /> 
                    <rect x="0" y="160" rx="8" ry="8" width="80" height="24" />
                </ContentLoader> :
                <>
                    {!isOrder && <div className='favorite'  onClick={onClickFavorite}>
                    <img src={isFavoritesAdded(id) || isFavorite ? '/img/icon-heart-like.svg' : '/img/icon-heart-unlike.svg'} alt='icon-heart-unlike'/>
                    </div>
                    }
                    <img width={133} height={112} src={imageUrl} alt=''/>
                    <h5>{title}</h5>
                    <div className='d-flex justify-between align-center'>
                        <div className='d-flex flex-column'>
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                        {!isOrder && <img className={styles.plus} src={isItemAdded(parentId ? parentId :id) ? '/img/icon-checkmark.svg' : '/img/icon-plus.svg'} alt='icon-plus' onClick={onClickPlus}/>}
                    </div>
                </>
            }
        </div>
    )
}


export default Card;