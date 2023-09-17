import React from 'react';
import axios from 'axios';

import {Order} from '../components/Order/index';
import {Info} from '../components/Info';



export function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get('https://64ffffb718c34dee0cd4208d.mockapi.io/Orders');
                setOrders(data);
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
            {orders.length > 0 ? 
                <div>
                    {(isLoading ? [1] : orders).map((order) => (
                        <Order
                            key={`${order.id}orders`}
                            order={order}
                            isLoading={isLoading}
                        />
                    ))}
                </div> :
                <div className='info-orders'>
                    <Info
                        title={'У вас нет заказов'}
                        description={'Вернитесь на главную, там много всего интересного'}
                        image={'img/smile-favorites.jpg'}
                        link={'Sneakers/'}
                    />
                </div>

            }

        </div>
    )
}

export default Orders;