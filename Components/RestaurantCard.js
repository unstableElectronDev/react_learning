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
            <h4>{resData.info.name}</h4>
            <div className="rescard-cuisines"><h5>{resData.info.cuisines.join(", ")}</h5></div>
            <div className="rescard-costfortwo"><h5>{resData.info.costForTwo}</h5></div>
            <div className="rating" style={{ backgroundColor: '#90EE90', width: '45px' ,position:'absolute',bottom:'10px',right:'13px',borderRadius:'6px'}}>
                <span>{resData.info.avgRating}</span>
                <span>★</span>
            </div>
            <div className="res-deliveryTime"><h5>⏱️{resData.info.sla.deliveryTime} minutes</h5></div>
        </div>
    );
}

export default RestaurantCard;
