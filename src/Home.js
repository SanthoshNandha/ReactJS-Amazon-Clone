import React from 'react'
import Product from "./Product.js"
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"    
                src="https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/Brand/JD/2020/Perception-Test-Sep20/prime_ufg_desktophero_message2_en_1500x600._CB406595857_.jpg">
            </img>
            <div className="home__row">
                <Product 
                    id={123} 
                    title={"Presto 03510 Ceramic FlipSide Belgian Waffle Maker,Black"} 
                    image={"https://images-na.ssl-images-amazon.com/images/I/91CnPwENWBL._AC_UL200_SR150,200_.jpg"} 
                    price={39.59} 
                    rating={4}
                />
                <Product 
                    id={124} 
                    title={"AmazonBasics Grey Dresser Drawer Storage Organizer for Undergarments, Set of 4ing"} 
                    image={"https://m.media-amazon.com/images/I/4166mNL9ZUL._AC_SY161_.jpg"} 
                    price={15.44} 
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                    id={125} 
                    title={"Household Essentials Ml-4105 Barrel Storage Tub W-Lid | Water Hyacinth"} 
                    image={"https://images-na.ssl-images-amazon.com/images/I/81InNfiDRqL._AC_UL400_SR300,400_.jpg"} 
                    price={119.79} 
                    rating={5}
                />
                <Product 
                    id={126} 
                    title={"Logitech M557 Bluetooth Mouse – Wireless Mouse with 1 Year Battery Life, Side-to-Side Scrolling, and Right or Left"} 
                    image={"https://images-na.ssl-images-amazon.com/images/I/81hcEqMZEFL._AC_UL400_SR300,400_.jpg"} 
                    price={37.00} 
                    rating={3}
                />
                 <Product 
                    id={127} 
                    title={"Asustek Rt-n18u N600 Gigabit wlan router 802.11 b/g/n"} 
                    image={"https://images-na.ssl-images-amazon.com/images/I/91nuOA0xLGL._AC_UL400_SR300,400_.jpg"} 
                    price={198.88} 
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                    id={128} 
                    title={"Herman Miller Aeron Ergonomic Office Chair with Tilt Limiter and Carpet Casters | Adjustable PostureFit SL, Arms"} 
                    image={"https://images-na.ssl-images-amazon.com/images/I/71VVk7m8aIL._AC_UL400_SR300,400_.jpg"} 
                    price={1395.00} 
                    rating={4}
                />

            </div>
            
        </div>
    )
}

export default Home
