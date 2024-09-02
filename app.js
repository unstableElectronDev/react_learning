import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header.js"
import Body from "./Components/Body.js";



// Header
// --Logo
// --Nav-Items(HOME,ABOUT,CART LOGIN/Logout)
// Body
// --Search
// --ResturantContainer
// --ResturantCard
// ---IMG
// ---Name of resturant,star rating ,cuesines,delevery time
// Footer
// --Copyright
// --Links
// --Adress
// --Contacts



const RestaurantCard = (props) => {
    return (
        <div className="restaurantCard" /*{style={{padding:'5px', width: '200px', height: '300px',
        
          }}}*/>
            <img className="res-logo"
                src={props.imageUrl}
                alt="Restaurant" 
                style={{ width: '100%', height: 'auto' }} 
            />
            <h3>{props.resName}</h3>
            <h5>{props.cuisine}</h5>
            <div className="rating" style={{backgroundColor:'#90EE90',width : '40px'}}>
                <span>{props.rating}</span>
                <span>★</span>
            </div>
            <h5>{props.delevery}</h5>
        </div>
    )
}


const AppComponent = () => {
    return(
        <div className ="app">
            <Header />
            <Body />
        </div>
    )
}
     


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>);
