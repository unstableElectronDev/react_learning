import { useState } from "react";
const Header =() => {
    const [btnName,setBtnName]=useState("LogIn");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" />
                <img className="logo" src="https://cdn.dribbble.com/users/107759/screenshots/1690462/foodies2.gif" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>
                        {/* cart */}
                        <img className="cart" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png"/>
                    </li>
                    <li><button className="LogIn" onClick={()=>{
                        btnName==="LogIn"
                            ?setBtnName("LogOut")
                            :setBtnName("LogIn");
                        }}
                    >
                        {btnName}
                        </button>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Header;
