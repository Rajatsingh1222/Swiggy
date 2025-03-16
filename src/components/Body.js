
import RestCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams, Link } from "react-router-dom";

const cities = {
  Delhi: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  Lakhimpur: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9462395&lng=80.7787163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  Mumbai: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  Lucknow: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
};

const Body = () => {
  const { cityId } = useParams(); // If using city-based routing
  const [selectedCity, setSelectedCity] = useState("Mumbai"); // Default city
  const [List, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        
      try {
        if (!cities[selectedCity]) return; // Avoid fetching for invalid cities
        const response = await fetch(cities[selectedCity]);
        const json = await response.json();

        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setList(restaurants);
        setFilteredList(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedCity]); // Runs when `selectedCity` changes

  if (List.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="body">
        {/* City Selector */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="border p-2 rounded"
        >
          {Object.keys(cities).map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* Search Bar */}
        <input
          type="text"
          id="fltr"
          placeholder="Find Restaurant"
          className="rounded-lg w-[400px] bg-gray-100 h-[35px] focus:outline-transparent focus:bg-white focus:shadow-md ml-7"
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              const searchTerm = e.target.value.toLowerCase();
              setFilteredList(List.filter((rate) => rate.info.name.toLowerCase().includes(searchTerm)));
            }
          }}
        />

        <button
          className="filter-btn bg-gray-100 h-[35px] w-12 my-2 ml-[-7px]"
          onClick={() => {
            const searchTerm = document.getElementById("fltr").value.toLowerCase();
            setFilteredList(List.filter((rate) => rate.info.name.toLowerCase().includes(searchTerm)));
          }}
        >
          🔍
        </button>

        {/* Restaurant List */}
        <div className="res-container flex flex-wrap ml-24 mb-[100px]">
          {filteredList.map((restaurant) => (
            <Link key={restaurant.info.id} to={"restaurantmenu/" + restaurant.info.id}>
              <RestCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
