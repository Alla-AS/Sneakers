import React from 'react';
import styles from './Card.module.scss';
console.log(styles);


function Card(props) {
    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className='favorite'  onClick={props.onFavorite}>
            <img src='/img/icon-heart-unlike.svg' alt='icon-heart-unlike'/>
            </div>
            <img width={133} height={112} src={props.imageUrl} alt=''></img>
            <h5>{props.title}</h5>
            <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>{props.price} руб.</b>
            </div>
                <img className={styles.plus} src={isAdded ? '/img/icon-checkmark.svg' : '/img/icon-plus.svg'} alt='icon-plus'  onClick={onClickPlus}></img>
            </div>
        </div>
    )
}


export default Card;