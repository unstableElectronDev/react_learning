import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");

  // Define your image URLs here
  const images = [
    'https://cdn.dribbble.com/users/393062/screenshots/14475354/media/f2221ff5ea31cd694fea71f05a28805c.gif',
    'https://cdn.dribbble.com/users/107759/screenshots/1690462/foodies2.gif',
  ];

  // State to keep track of the current image index and fading effect
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // For fade effect

  // useEffect to handle the image change every 2 minutes (120000 milliseconds)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fade out

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true); // Fade in after image switch
      }, 1000); // Duration for fade-out and fade-in

    }, 6000); // 2 minutes

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="header">
      {/* Commented block showing original image setup
      <div className="logo-container">
        <img className="logo" src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" />
        <img className="logo" src="https://cdn.dribbble.com/users/107759/screenshots/1690462/foodies2.gif" />
      </div> 
      */}

      {/* Logo Container */}
      <div className="logo-container">
        <img
          className={`logo ${fade ? "fade-in" : "fade-out"}`} // Apply fade classes
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>

      {/* Navigation Items */}
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact US</Link>
          </li>
          <li>
            {/* cart */}
            <img
              className="cart"
              src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart.png"
              alt="Cart"
            />
          </li>
          <li>
            <button
              className="LogIn"
              onClick={() => {
                setBtnName((prevName) => (prevName === "LogIn" ? "LogOut" : "LogIn"));
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
