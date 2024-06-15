import { useDispatch } from "react-redux";
import { addItems } from "../utils.js/cartSlice";
const Food_item=({items})=>{
// console.log(items);
    // {menuData.card.info.imageId?x="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+menuData.card.info.imageId:x="https://i.pinimg.com/1200x/dc/38/85/dc388547a4462f7bbe31c48c8627ddf9.jpg"};

const dispatch=useDispatch();
   const  addItemsfun=(item)=>{
dispatch(addItems(item));
   };
    return (
        <>
       {items.map((item)=> (<div key={item.card.info.id} className=" w-7/12 h-[115px] cursor-pointer bg-green-100 shadow-gray-300 flex justify-between mx-auto mb-1 hover:bg-gray-200 transition-all duration-300 rounded-3xl">
        <div className="text-gray-500 font-semibold text-2xl mt-2 ml-2 w-[620px]">{item.card.info.name}</div>
        <div className="w-[110px] rounded-md mt-2" > <img   className="w-[95px] h-[95px] rounded-[40px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}/> 
        <button className="w-[65px] bg-black h-[28px] mt-[-22px] ml-3 absolute rounded-lg font-mono hover:scale-[0.95] transition-all duration-100 text-lg font-semibold text-gray-300 text-center" onClick={()=>addItemsfun(item)}>Add+</button>
        </div>
        </div>))}
       
        

        </>
    )
};
export default Food_item;