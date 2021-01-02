import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating}) {

    const [{ basket }, dispatch] = useStateValue()
    console.log("this is the basket >>> ", basket)

    const addToBasket = () => {
        //dispatch the item into the dataLayer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => 
                        <p>⭐</p>
                    )}
                </div>
            </div>
            
            <img alt="Gaming Accessories" 
                src={image}
                class="landscape-image"
                data-a-hires="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Gaming_2X._SY608_CB432517394_.jpg"
            />

            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
