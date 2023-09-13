import React from 'react';
import ContentLoader from "react-content-loader"
import AppContext from '../../context';


import styles from './Card.module.scss';


function Card({id, title, price, imageUrl, onFavorite, onPlus, favorited = false, added = false, loading = false}) {
    const { isItemAdded, onAddToFavorite,  onAddToCard } = React.useContext(AppContext);
    // const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus = () => {
        // onPlus({id, title, price, imageUrl});
        onAddToCard({id, title, price, imageUrl});
        // setIsAdded(!isAdded);
    };

    const onClickFavorite = () => {
        // onFavorite({id, title, price, imageUrl});
        onAddToFavorite({id, title, price, imageUrl});

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
                    <div className='favorite'  onClick={onClickFavorite}>
                    <img src={isFavorite ? '/img/icon-heart-like.svg' : '/img/icon-heart-unlike.svg'} alt='icon-heart-unlike'/>
                    </div>
                    <img width={133} height={112} src={imageUrl} alt=''></img>
                    <h5>{title}</h5>
                    <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                        <img className={styles.plus} src={isItemAdded(id) ? '/img/icon-checkmark.svg' : '/img/icon-plus.svg'} alt='icon-plus'  onClick={onClickPlus}></img>
                    </div>
                </>
            }
        </div>
    )
}


export default Card;