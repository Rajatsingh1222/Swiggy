import { useSelector } from "react-redux";
import Food_item from "./Food_item";
import { useDispatch } from "react-redux";
import { addItems, clearCart } from "../utils.js/cartSlice";
import EmptyCart from "./EmptyCart";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
   //  console.log(cartItems);
    const dispatch=useDispatch();
   const  clearItemsfun=()=>{
dispatch(clearCart());
   };
   // const quant=useSelector((store)=>store.cart.items.card)
console.log(cartItems)

if(cartItems.length===0){
   return <EmptyCart/>;
}
    return (
        <>
        <div className="relative">

     <button className="w-[90px] h-[37px] bg-black m-10 text-white rounded-lg p-2 font-semibold whitespace-nowrap absolute right-1 hover:scale-90 transition-all" onClick={clearItemsfun}> Clear Cart</button>
        </div>

<div className=" p-[3px] mt-16 ml-10 bg-yellow-200 w-[600px] rounded-md">
    {cartItems.map((item)=> 
        (
           <>


        <div key={item.card.info.id} className="  w-12/12 h-[70px] cursor-point  shadow-gray-200 flex justify-end hover:bg-violet-200 transition-all duration-300 border-slate-950 relative ">
        <div className="text-gray-500 font-semibold text-2xl mt-2 ml-2 w-[620px]">{item.card.info.name}</div>
        <div className="w-[110px] rounded-md mt-1" > <img   className="w-[55px] h-[55px] rounded-[40px]" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item.card.info.imageId}/>  </div>
         <span className="absolute w-4 h-6 right-[-22px] top-5 text-center rounded-md bg-red-400"> <button>-</button></span>
         <span className="absolute  w-10 h-[30px] rounded-xl text-center top-4 right-[-65px] bg-green-500 text-white">{item.quan}</span>
         <span className="absolute w-4 h-6 right-[-85px] top-5 bg-gray-400 text-center rounded-md"><button>+</button></span>
        </div>
          

           </>
        )
               )
    }    
</div>
   
        </>


    )
}
export default Cart;