let RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="restaurantCard">
            <div className="res-logo">
                <img
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
                    alt="Restaurant"
                    style={{ 
                        width: '100%', /* Scale image to fit container width */
                        height: '100%', /* Scale image to fit container height */
                        objectFit: 'cover' /* Maintain aspect ratio while covering container */
                    }}
                />
            </div>
            <h3>{resData.info.name}</h3>
            <h5>{resData.info.cuisines.join(", ")}</h5>
            <h5>{resData.info.costForTwo}</h5>
            <div className="rating" style={{ backgroundColor: '#90EE90', width: '40px' }}>
                <span>{resData.info.avgRating}</span>
                <span>★</span>
            </div>
            <h5>{resData.info.sla.deliveryTime} minutes</h5>
        </div>
    );
}

export default RestaurantCard;
