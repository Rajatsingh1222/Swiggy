import { useSelector } from "react-redux";
import Food_item from "./Food_item";
import { useDispatch } from "react-redux";
import { addItems, clearCart,removeItems } from "../utils.js/cartSlice";
import EmptyCart from "./EmptyCart";
const Cart=()=>{
   const cartItems=useSelector((store)=>store.cart.items);
   //  console.log(cartItems);
   const dispatch=useDispatch();
   const  clearItemsfun=()=>{
dispatch(clearCart());
};
const  addItemsfun=(item)=>{
   dispatch(addItems(item));
};
const  removeItemsfun=(item)=>{
   dispatch(removeItems(item));
};
// const quant=useSelector((store)=>store.cart.items.card)
// console.log(cartItems)
let subtotal=0;
cartItems.map((item) => {
   return (subtotal += ((item.card.info.price)/100===NaN?(item.card.info.defaultPrice)/100:(item.card.info.price)/100)*item.quan);
 });

if(cartItems.length===0){
   return <EmptyCart/>;
}
    return (
        <>
        <div className="relative">

     <button className="w-[90px] h-[40px] bg-black m-10 text-white rounded-lg p-2 font-semibold whitespace-nowrap absolute right-1 hover:scale-90 transition-all" onClick={clearItemsfun}> Clear Cart</button>
        </div>

<div className=" p-[3px] mt-16 ml-10 border-red-700 w-[600px]  rounded-md">
    {cartItems.map((item)=> 
        (
           <>

       <div>
        <div key={item.card.info.id} className="  w-12/12 h-[70px] cursor-point  shadow-gray-200 flex justify-end hover:bg-violet-200 transition-all duration-300 border-red-800 relative ">
        <div className="text-gray-500 font-semibold text-2xl mt-2 ml-2 w-[620px]">{item.card.info.name}</div>
        <div className="w-[80px] rounded-md mt-1" > <img   className="w-[55px] h-[55px] rounded-[40px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}/>  </div>
         <span className="absolute w-5 h-7   top-4  right-[-35px] text-center rounded-md bg-green-500 text-white"> <button onClick={()=>removeItemsfun(item)}>-</button></span>
         <span className="absolute w-15 h-7   top-4  right-[-360px] text-center rounded-md  text-fuchsia-400 font-bold text-xl">{(item.card.info.price)/100 }.00Rs </span>
         <span className="absolute  w-10 h-7  right-[-80px] rounded-xl text-center top-4  bg-green-500 text-white">{item.quan}</span>
         <span className="absolute w-5 h-7   top-4 right-[-105px] bg-green-500 text-white text-center rounded-md"><button  onClick={()=>addItemsfun(item)}>+</button></span>
        </div>
        </div>
        <hr className="w-full"></hr>
        
          

           </>
        )
               )
    }  
    <div className="h-[300px]  mt-32" >Total BILL
    <div className="text-fuchsia-800 mt-6">{Math.round(subtotal)}.00Rs</div>
    </div>
 

</div>
   
        </>


    )
}
export default Cart;