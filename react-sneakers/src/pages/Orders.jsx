import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import AppContext from '../context';



function Orders() {
    const {onAddToCart, onAddToFavorite} = React.useContext(AppContext);
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://64ffffb718c34dee0cd4208d.mockapi.io/Orders');
                // setOrders(prev => [...prev, ...data.map((obj) => obj.items).flat()]);
                setOrders(data.reduce((previo, obj) => [...previo, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказа');
                console.error(error);
            }

        })();
        
    }, []);

    return (
        <div className='content p-40'>
            <div className='d-flex align-center justify-between mb-40'>
            <h1>Мои закaзы</h1>

            </div>
            <div className='cards d-flex'>
             {(isLoading ? [1, 2] : orders).map((item) => (
                <Card 
                    // onPlus={(obj) => onAddToCart(obj)}
                    // onFavorite={(obj) => onAddToFavorite(obj)}
                    key={item.imageUrl}
                    loading={isLoading}
                    // favorited={true}
                    {...item}
                />
                ))}
            </div>
        </div>
    )
}


export default Orders;