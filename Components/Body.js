import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/Mockdata";
import Shimmer from './Shimmer.js';
import { Link } from "react-router-dom";

const Body = () => {
  // State to hold the original list of restaurants
  const [originalListOfRestaurants, setOriginalListOfRestaurants] = useState(resList);
  // State to hold the currently displayed list of restaurants
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [selectedRating, setSelectedRating] = useState('');
  const [searchInput, setSearchInput] = useState(''); // State for search input

  useEffect(() => {
    fetchData();
    console.log("useEffect Called");
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6284035&lng=77.4404041&collection=83648&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );
      const json = await response.json();
      console.log(json);

      const fetchedRestaurants = json?.data?.cards || [];
      const filteredRestaurants = fetchedRestaurants.filter(
        (restaurant) =>
          restaurant.card?.card
      );

      setOriginalListOfRestaurants(filteredRestaurants);
      setListOfRestaurants(filteredRestaurants); // Set initially fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterByRating = (minRating) => {
    const filteredList = originalListOfRestaurants.filter(
      (res) => res.card?.card?.info?.avgRating > minRating
    );
    setListOfRestaurants(filteredList);
  };

  const handleFilterChange = (event) => {
    const rating = event.target.value;
    setSelectedRating(rating);
    if (rating) {
      filterByRating(Number(rating));
    } else {
      resetFilters(); // Reset if no rating is selected
    }
  };

  const handleFilterClick = () => {
    const filteredList = originalListOfRestaurants.filter(
      (res) => res.card?.card?.info?.avgRating > 4
    );
    setListOfRestaurants(filteredList);
    setSelectedRating(''); // Clear dropdown selection
  };

  const resetFilters = () => {
    setListOfRestaurants(originalListOfRestaurants); // Reset to original list
    setSelectedRating(''); // Clear selected rating in dropdown
    setSearchInput(''); // Clear search input
  };
  //SEARCH
  const handleSearchChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    if (input) {
      const filteredList = originalListOfRestaurants.filter(
        (res) =>
          res.card?.card?.info?.name.toLowerCase().includes(input.toLowerCase()) // Filter by restaurant name
      );
      setListOfRestaurants(filteredList);
    } else {
      setListOfRestaurants(originalListOfRestaurants); // Reset if search input is empty
    }
    

  };
  if (listOfRestaurants.length === 0) {
    console.log("Displaying Shimmer..."); // Debug log
    return <Shimmer />;
  }

  return (
    <div className="Body">
      <div className="search">
        <input
          type="text"
          placeholder="Search Restaurant"
          value={searchInput}
          onChange={handleSearchChange} // Update search input state
        />
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterClick}>
          Top rated restaurants
        </button>
        <button className="reset-rating-btn" onClick={resetFilters}>
          Reset Rating Filter
        </button>

        <select 
          className="rating-dropdown"
          value={selectedRating}
          onChange={handleFilterChange}
        >
          <option value="">Filter by rating</option>
          <option value={1}>Above 1 ★</option>
          <option value={2}>Above 2 ★</option>
          <option value={3}>Above 3 ★</option>
          <option value={4}>Above 4 ★</option>
        </select>
      </div>
      <div className="restaurantContainer" style={{ display: 'flex', overflowX: 'scroll' }}>
      {listOfRestaurants.map((restaurant) =>
        restaurant.card?.card?.info ? (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurant/" + restaurant.card.card.info.id}
            className="link"  // Apply the CSS class here
          >
            <RestaurantCard
              resData={restaurant.card.card}
              className="restaurantCard"
            />
          </Link>
        ) : null
      )}
    </div>
    </div>
  );
};

export default Body;
