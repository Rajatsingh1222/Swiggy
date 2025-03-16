import RestCard from "./ResCard"; 
import { useState, useEffect, useRef } from "react"; 
import Shimmer from "./Shimmer"; 
import { useParams, Link } from "react-router-dom"; 
import Closed from "./Closed";

// Defined city data
const cities = {   
  Delhi: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",   
  Lakhimpur: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9462395&lng=80.7787163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",   
  Mumbai: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",   
  Lucknow: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", 
};

const Body = () => {   
  const { cityId } = useParams(); // If using city-based routing   
  const [selectedCity, setSelectedCity] = useState("Delhi"); // Default city   
  const [List, setList] = useState([]);   
  const [filteredList, setFilteredList] = useState([]);   
  const citey = useRef(null);  // Using ref for city search input   

  // Fetching restaurant data based on selected city
  useEffect(() => {     
    const fetchData = async () => {       
      try {         
        if (!cities[selectedCity]) return; // Avoid fetching for invalid cities         
        const response = await fetch(cities[selectedCity]);         
        const json = await response.json();          
        
        // Extracting restaurant data       
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];         
        setList(restaurants);         
        setFilteredList(restaurants);       
      } catch (error) {         
        console.error("Error fetching data:", error);       
      }     
    };     
    fetchData();   
  }, [selectedCity]); // Dependency on selectedCity to trigger new fetch

  // Function to handle city selection change from dropdown
  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // Function for filtering restaurants based on search term
  const handleSearch = (e) => {     
    const searchTerm = e.target.value.toLowerCase();     
    setFilteredList(List.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchTerm)));   
  };

  // Show shimmer if the list is empty (while fetching)
  if (List.length === 0) {     
    return <>

     <select
    value={selectedCity}
    onChange={handleCityChange}
    className="border p-2 rounded"
  >
    {Object.keys(cities).map((city, index) => (
      <option key={index} value={city}>
        {city}
      </option>
    ))}
  </select>
<Shimmer/>    </>
  }

  return (
    <>       
      <div className="body">         
        {/* City Selector Dropdown */}
        <select
          value={selectedCity}
          onChange={handleCityChange}
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
          onKeyUp={handleSearch}
        />

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
