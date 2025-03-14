import RestCard from "./ResCard";
import { useState, useEffect} from "react";
import  Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import City from "./City";


const Body=()=>{
    

const {cityId}=useParams(); 
    // let resList=[
        
    //     {resname:"Shivam Restaurant",
    //     id:1,
    //     rating:"4.9",
    //     cuisine:"Indian",
    //     time:"30min",
    //       logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/x1w5w54bxzohdd87istc"
    //     },
        
    //     {resname:"Comfort INN",
    //     id:2,
    //     rating:"4.6",
    //     cuisine:"Indian",
    //     logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvn2wwrtcvy0zotoxpwq",
    //     time:"30min"},
        
    //     {resname:"Swad restaurant",
    //     id:3,
    //     rating:"3.8",
    //     cuisine:"Indian",
    //     logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fxb3pkyszn7vpmqnoio8",
    //     time:"30min"},

    //     {resname:"Sudama",
    //     id:4,
    //     rating:"3.9",
    //     cuisine:"Indian",
    //     logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/yk2wxuqxwama3i5tcfxo",
    //     time:"30min"},

    //     {resname:"Atithi",
    //     id:5,
    //     rating:"4.0",
    //     cuisine:"Indian",
    //     logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/oyyn4tdwxturxbgrrtpe",
    //     time:"30min"},
        
    //     {resname:"Dominos",
    //     id:6,
    //     rating:"3.5",
    //     cuisine:"Indian",
    //     logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/zy8gdmkzh7z7bqnscqig",
    //     time:"30min"},
        
    //     {resname:"Bhola  ",
    //     id:7,
    //     rating:"4.2",
    //     cuisine:"Indian",
    //     logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/aokjecpp1uafivrkrqb4",
    //     time:"30min"},
        
    //     {resname:"Ajmani cafe",
    //     id:8,
    //     rating:"3.9",
    //     cuisine:"Indian",
    //     logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/76a05b39545d5a2bf80d6a3e3e46544a",
    //     time:"30min"},
        
    //     {resname:"Mughal Dhaba",
    //     id:9,
    //     rating:"4.3",
    //     cuisine:"Indian",
    //     logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/iidydoy3yxte7eelbbwy",
    //     time:"30min"},
        
    //     {resname:"Burger singh",
    //     id:10,
    //     rating:"3.8",
    //     cuisine:"Indian",
    //     logo:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/63a5569f00995b064bfd054f3941592b",
    //     time:"30min"}
        
    // ];
   
  const cityData={
      
     delhi:"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
       Lakhimpur:"https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9462395&lng=80.7787163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
       Mumbai:"https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
       Lucknow:"https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN",
    };
   
    
    const [List,setList]=useState([]);
    const [city,setCity]=useState("Lakhimpur");
    const [cityInput,setCityInput]=useState("");
    const [filteredList,setFilteredList]=useState([]);
    
    
    useEffect(()=>{

     const fetchData= async ()=>{
           
    // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?"+"lat=28.7040592&lng=77.10249019999999"+"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179");
    const data=await fetch(city);
 
    const Json= await data.json();   
      
    //  "Optional Chaining"
    setList(Json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants); 
    setFilteredList(Json?.data?.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants); 
   
    
    
};

fetchData();

        
    },[city]);


    
   
 
    if(List.length===0){
        return <Shimmer/>;
    }

    

    return (
        <>
        {/* <City/> */}
        
        <div className="body">
             
     {/* <button  onClick={()=>setCity(delhi)} >{city}</button> */}
     <input
          type="text"
          placeholder="Enter city name (delhi, lakhimpur)"
          className="rounded-lg w-[300px] bg-gray-100 h-[35px] focus:outline-transparent focus:bg-white focus:shadow-md ml-7"
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter" && cityData[cityInput.toLowerCase()]) {
              setCity(cityInput.toLowerCase());
            }
          }}
        />
       <input type="text" id ="fltr" placeholder="Find Restaurant" className="rounded-lg w-[400px] bg-gray-100 h-[35px] focus:outline-transparent focus:bg-white focus:shadow-md ml-7 "

       onKeyUp={(e)=>{

if (e.key === 'Enter') {

const n=(document.getElementById("fltr").value);

var filteredlist =List.filter((rate)=>  { return rate.info.name.toLowerCase().includes(n.toLowerCase())  }
                );
setFilteredList(filteredlist);                
}
}}
               
               ></input>

               <button className="filter-btn bg-gray-100 h-[35px] w-12 my-2 ml-[-7px]"  onClick={(e)=>{



const n=(document.getElementById("fltr").value);

var filteredlist =List.filter((rate)=>  { return rate.info.name.toLowerCase().includes(n.toLowerCase())  }
                );
setFilteredList(filteredlist);                

}}>🔍</button>

            
        

                
                <div className="res-container flex  flex-wrap ml-24 mb-[100px]">

                 {filteredList.map((restaurant)=> (



                
              <Link   key ={restaurant.info.id} to={"restaurantmenu/"+restaurant.info.id}  > <RestCard  resData={restaurant} /></Link>
                
                 ))}
                    
                </div>
               </div>


    
        </>
    )
    
}

export default Body;









// import RestCard from "./ResCard";
// import { useState, useEffect } from "react";
// import Shimmer from "./Shimmer";
// import { useParams, Link } from "react-router-dom";

// const cities = {
//   Delhi: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//   Lakhimpur: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9462395&lng=80.7787163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//   Mumbai: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
//   Lucknow: "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8466937&lng=80.94616599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
// };

// const Body = () => {
//   const { cityId } = useParams(); // If using city-based routing
//   const [selectedCity, setSelectedCity] = useState("Mumbai"); // Default city
//   const [List, setList] = useState([]);
//   const [filteredList, setFilteredList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
        
//       try {
//         if (!cities[selectedCity]) return; // Avoid fetching for invalid cities
//         const response = await fetch(cities[selectedCity]);
//         const json = await response.json();

//         const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
//         setList(restaurants);
//         setFilteredList(restaurants);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [selectedCity]); // Runs when `selectedCity` changes

//   if (List.length === 0) {
//     return <Shimmer />;
//   }

//   return (
//     <>
//       <div className="body">
//         {/* City Selector */}
//         <select
//           value={selectedCity}
//           onChange={(e) => setSelectedCity(e.target.value)}
//           className="border p-2 rounded"
//         >
//           {Object.keys(cities).map((city, index) => (
//             <option key={index} value={city}>
//               {city}
//             </option>
//           ))}
//         </select>

//         {/* Search Bar */}
//         <input
//           type="text"
//           id="fltr"
//           placeholder="Find Restaurant"
//           className="rounded-lg w-[400px] bg-gray-100 h-[35px] focus:outline-transparent focus:bg-white focus:shadow-md ml-7"
//           onKeyUp={(e) => {
//             if (e.key === "Enter") {
//               const searchTerm = e.target.value.toLowerCase();
//               setFilteredList(List.filter((rate) => rate.info.name.toLowerCase().includes(searchTerm)));
//             }
//           }}
//         />

//         <button
//           className="filter-btn bg-gray-100 h-[35px] w-12 my-2 ml-[-7px]"
//           onClick={() => {
//             const searchTerm = document.getElementById("fltr").value.toLowerCase();
//             setFilteredList(List.filter((rate) => rate.info.name.toLowerCase().includes(searchTerm)));
//           }}
//         >
//           🔍
//         </button>

//         {/* Restaurant List */}
//         <div className="res-container flex flex-wrap ml-24 mb-[100px]">
//           {filteredList.map((restaurant) => (
//             <Link key={restaurant.info.id} to={"restaurantmenu/" + restaurant.info.id}>
//               <RestCard resData={restaurant} />
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Body;
