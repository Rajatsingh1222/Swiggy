import {LOGO_URL} from "../utils.js/constants";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";



const Header=()=>{
    const cartitems=useSelector((store)=>store.cart.items)
var sum=0;
    for(x in cartitems){
sum+=cartitems[x].quan;
    }
    return (
        <div className="header 
         flex  justify-between items-center bg-zinc-100 h-[120px] shadow-md w-full mb-0 ">
    {/* <img className="logo rounded-full w-24 h-24 ml-4 mt-3 border-red-400 animate-pulse" src={LOGO_URL} /> */}
    <div className="  text-3xl px-3  text-center font-bold  text-purple-600 text-opacity-50 mt-[-10px] ml-4 ">gourmet</div>
<ul className="li-items flex justify-between   h-[120px] w-[600px]">
  


    <li className=" w-20 mt-10 text-2xl h-8 text-pink-400 hover:text-gray-700 font-semibold"><Link to="/">Home </Link></li>
    <li className="  w-20 mt-10 text-2xl h-12 mr-8 whitespace-nowrap text-pink-500 hover:text-gray-700 font-semibold "><Link to="/cart">🛒 ({sum}-items) </Link></li>
    <li className="   w-20 mt-10 text-2xl h-8 text-pink-500 hover:text-gray-700 font-semibold"><Link to="/contact">Contact </Link></li>
    <li className="  w-20 mt-10 text-2xl h-8 text-pink-500 hover:text-gray-700 font-semibold"><Link to="/about">About </Link></li>
    

    
</ul>


        </div>
    )
}
export default Header;