import { useState,useEffect,createContext } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
// import Offers from "./offers";
// import Veg from "./Veg";
const UserContext = createContext();




const RestMenu=()=>{
    const [menuList,setMenuList]=useState(null);
    const [menuItems,setMenuItems]=useState([]);
    const [veg,setVeg]=useState(1);
    const [vegtext,setVegText]=useState("Veg only");

    // const [menuFilteredItems,setMenuFilteredItems]=useState([]);
    const [type,setType]=useState("veg🔍");
        const {id}=useParams(); 


    useEffect(()=>{
        Menu();
    },[])
    const Menu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId="+id);
        const json = await data.json();
        setMenuList(json?.data);
        setMenuItems(json?.data);
    };
    if (menuList ===null )return <Shimmer/>;
    if(itemCards===null)return <Shimmer/>;
    const {name,areaName,cuisines,costForTwoMessage}=menuList?.cards[2]?.card?.card?.info;
    var {itemCards}=menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    if(itemCards==[]) {
        return <Shimmer/>;
    }
  const category=(menuItems?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
 c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
 ));
  const handleVeg=()=>{
   veg?setVegText("veg and non veg"):setVegText("Veg only")
   veg?setVeg(0):setVeg(1)     
}



 
    return (
        <>
                <UserContext.Provider value={veg}>

<div className="bg-green-500 inline-block w-[100px] rounded-xl text-white p-1 pl-2 cursor-pointer m-4"onClick={handleVeg} >{vegtext}</div>
    <div className="menu-card text-gray-700 text-lg font-semibold w-[900px] h-[130px] bg-purple-300 shadow-[22px_22px_83px_#c1c1c1,-22px_-22px_83px_#ffffff]  text-center  mx-auto  my-5 rounded-lg">
    <div className="font-bold text-3xl">{name}</div>
    <div>{areaName+"📍`"}</div>
    <div>{cuisines.join(", ")}</div>
    <div>{costForTwoMessage}</div>
    </div>


{
category.map((filcategory)=>(
(filcategory.card.card.itemCards.length>0)?<ResCategory key={filcategory.card.card.title} catData={filcategory}/>:<></>
))
}

    

</UserContext.Provider>

        </>
);
};

export default RestMenu;
export{UserContext}






{/* <Offers /> */}
{/* <Veg/> */}
{/* <button 
onClick={(e)=>{
type=="veg🔍"?setType("❌"):setType("veg🔍");
var x =itemCards.filter((rate)=>  { return rate.card.info.isVeg==1 })
    
    type=="veg🔍"?setMenuFilteredItems(x):setMenuFilteredItems(itemCards);

}}>{type}</button> */}