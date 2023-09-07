import React from 'react';
import styles from './Card.module.scss';


function Card({title, price, imageUrl, onFavorite, onPlus}) {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({title, price, imageUrl});
        setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        onFavorite({title, price, imageUrl});
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div className='favorite'  onClick={onFavorite}>
            <img onClick={onClickFavorite} src={isFavorite ? '/img/icon-heart-like.svg' : '/img/icon-heart-unlike.svg'} alt='icon-heart-unlike'/>
            </div>
            <img width={133} height={112} src={imageUrl} alt=''></img>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>{price} руб.</b>
            </div>
                <img className={styles.plus} src={isAdded ? '/img/icon-checkmark.svg' : '/img/icon-plus.svg'} alt='icon-plus'  onClick={onClickPlus}></img>
            </div>
        </div>
    )
}


export default Card;