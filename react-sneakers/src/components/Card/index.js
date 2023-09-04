import styles from './Card.module.scss';
console.log(styles);


function Card(props) {
    // const onClickButton = () => {
    //     alert(123)
    // }

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
            <button className='button' onClick={props.onPlus}>
                <img width={11} height={11} src='/img/plus.svg' alt='icon-plus'></img>
            </button>
            </div>
        </div>
    )
}


export default Card;