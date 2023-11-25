import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Food_item from "./Food_item";
import Offers from "./offers";
import Veg from "./Veg";




const RestMenu=()=>{
    const [menuList,setMenuList]=useState(null);
    const [menuItems,setMenuItems]=useState([]);
    // const [menuFilteredItems,setMenuFilteredItems]=useState([]);
    const [type,setType]=useState("veg🔍");
        const {id}=useParams(); 

    useEffect(()=>{
        Menu();
        // setMenuFilteredItems(menuItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    },[])
    const Menu=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8466937&lng=80.94616599999999&restaurantId="+id);
        const json = await data.json();
        setMenuList(json?.data);
        setMenuItems(json?.data);
    };
    if (menuList ===null )return <Shimmer/>;
    if(itemCards===null)return <Shimmer/>;
    const {name,areaName,cuisines,costForTwoMessage}=menuList?.cards[0]?.card?.card?.info;
    var {itemCards}=menuItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // setMenuFilteredItems(itemCards);
    if(itemCards==[]) {
        return <Shimmer/>;
    }
 
 
    return (
        <>
    
    {/* <button 
    onClick={(e)=>{
    type=="veg🔍"?setType("❌"):setType("veg🔍");
    var x =itemCards.filter((rate)=>  { return rate.card.info.isVeg==1 })
        
        type=="veg🔍"?setMenuFilteredItems(x):setMenuFilteredItems(itemCards);

    }}>{type}</button> */}
    <div className="menu-1-card">

<div className="menu-1-1-card">

    <h2>{name}</h2>
    <div>{areaName+"📍`"}</div>
    <div>{cuisines.join(", ")}</div>
    <div>{costForTwoMessage}</div>
</div>
    </div>
    
    <Offers />

<div className="menu-list-div">
{/* <Veg/> */}
    <ul className="menu-ul">
        {
            itemCards==null?<Shimmer/>:itemCards.map((res)=> ( <Food_item menuData={res}/>))
        }
    </ul>
</div>
    </>
);
};

export default RestMenu;