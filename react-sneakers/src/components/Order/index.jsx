import React from "react"
import ContentLoader from "react-content-loader"

import {Card} from "../Card"
import styles from "./Order.module.scss"

export function Order({order, isLoading}) {
    return (
        <>
            {isLoading ? <ContentLoader 
                speed={2}
                width={1000}
                height={432}
                viewBox="0 0 1000 432"
                backgroundColor="#f3f3f3"
                >
                    <rect x="40" y="40" rx="10" ry="10" width="143" height="40" /> 
                    <rect x="94" y="213" rx="0" ry="0" width="0" height="1" /> 
                    <rect x="63" y="113" rx="20" ry="20" width="205" height="260" /> 
                    <rect x="300" y="113" rx="20" ry="20" width="205" height="260" />
                </ContentLoader> :
                <div className={styles.order}>    
                    <h2>{`Заказ №${order.id}`}</h2>
                    <div className='cards d-flex'>
                    {(order.items).map((item) => (
                        <Card 
                            key={`${item.id}order`}
                            {...item}
                            isOrder={true}
                        />))}
                    </div>
                </div>
            }
        </>
    )
}

