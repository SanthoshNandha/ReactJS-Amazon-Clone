import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js"
import Subtotal from "./Subtotal.js"

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Toys_Internet/XCM_Manual_1231847_1223960_US_us_kgg_q3_tgs_back_to_main_revision_us_en_3183154_1500x120_en_US.jpg"
                    alt=""
                />
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2> Your Shopping Basket is Empty</h2>
                        </div>
                    )
                    :
                    (
                        <div>
                            <h2 className="checkout__title"> Your Shopping Basket </h2>
                            {
                                basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))
                            }
                            

                        </div>
                    )
                }

            </div>
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
