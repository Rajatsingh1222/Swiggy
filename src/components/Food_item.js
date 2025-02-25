import { useDispatch } from "react-redux";
import { addItems } from "../utils.js/cartSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import Food from "./Food";
const Food_item=({items})=>{
    // {menuData.card.info.imageId?x="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+menuData.card.info.imageId:x="https://i.pinimg.com/1200x/dc/38/85/dc388547a4462f7bbe31c48c8627ddf9.jpg"};
    const dispatch=useDispatch();
    const  addItemsfun=(item)=>{
dispatch(addItems(item));
};

console.log(items);

    return (
        <>
       {items.map((item)=>
       <>
        (<div key={item.card.info.id} className=" w-7/12 h-[115px] cursor-pointer bg-gray-200 shadow-gray-300 flex justify-between  ml-[310px] hover:bg-gray-300 transition-all duration-300 ">
       
       <div>

        <div className="text-gray-500 font-semibold text-2xl mt-2 ml-2 w-[620px]">{item.card.info.name}</div>
        <div className="m-2 text-gray-600">Rs-{(item.card.info.price)/100}.00</div>
        <div className="ml-2 text-blue-500 font-bold"> ⭐ {item.card.info.ratings.aggregatedRating.rating?item.card.info.ratings.aggregatedRating.rating:"N/A"}</div>
       </div>
        <div className="w-[110px] rounded-md mt-2" > <img   className="w-[95px] h-[95px] rounded-[40px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}/> 
        <Food  data = {item}/>
        </div>
        </div>
            
       </>
        
        )}
       
        

        </>
    )
};
export default Food_item;