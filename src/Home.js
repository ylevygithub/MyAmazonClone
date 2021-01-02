import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
                    alt=""
                    height="600px"
                    width="1500px" 
                />
                <div className="home__row">
                    <Product
                        id="2121151564"
                        title='DualSense Wireless Controller'
                        price={69.99}
                        image='https://m.media-amazon.com/images/I/71y+UGuJl5L._AC_UY218_.jpg'
                        rating={5}
                    />
                    <Product
                        id="2121151514"
                        title='Nintendo Switch Pro Controller'
                        price={49.99}
                        image='https://m.media-amazon.com/images/I/61drpi3cYUL._AC_UY218_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                            id="22541211515"
                            title='Logitech G502 Hero High Performance Gaming Mouse'
                            price={39.99}
                            image='https://m.media-amazon.com/images/I/51IOmsWQVAL._AC_UY218_.jpg'
                            rating={5}
                        />
                    <Product
                        id="2121151589"
                        title='Xbox Core Controller - Robot White'
                        price={49.99}
                        image='https://m.media-amazon.com/images/I/51gNmD2-otL._AC_UY218_.jpg'
                        rating={5}
                    />
                    <Product
                        id="2121151520"
                        title='RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic &amp; LED Light, Compatib...'
                        price={39.99}
                        image='https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY218_.jpg'
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                            id="2123615"
                            title='Redragon S101 Wired Gaming Keyboard and Mouse Combo RGB Backlit Gaming Keyboard with Multimedia Keys Wrist Rest and Red Ba...'
                            price={159.99}
                            image='https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY218_.jpg'
                            rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
