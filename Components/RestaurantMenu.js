import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo == null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

    return (
        <div className="res-menu">
            <div className="resName-menu"><h1>{name}</h1></div>
            <h3>{cuisines?.join(' , ')}</h3>
            <h3>{costForTwoMessage}</h3>

            <div className="menu-heading"><h2>Menu</h2></div>
            <ul>
                {itemCards.length > 0 ? (
                    itemCards.map((item) => (
                        <li key={item.card?.info.id}>
                            <div className="restaurantMenu">
                                {item.card?.info?.imageId && (
                                <div className="menu-image">
                                    <img
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                                    alt="Menu Image"
                                    />
                                </div>
                                )}
                                <h3>{item.card?.info.name}</h3>
                                <h5 className="price">₹{(item.card?.info.DefaultPrice / 100) || (item.card?.info.price/100) }</h5>
                                <h5>{item.card?.info.description}</h5>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>No items available</p> // Handle the case where there are no items
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
