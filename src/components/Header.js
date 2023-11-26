import {LOGO_URL} from "../utils.js/constants";
import { Link } from "react-router-dom";


const Header=()=>{
    return (
        <div className="header flex justify-end bg-blue-50 h-[120px] shadow-md">
    {/* <img className="logo rounded-full w-24 h-24 ml-4 mt-3 border-red-400 animate-pulse" src={LOGO_URL} /> */}
 
<ul className="li-items flex justify-between   h-[120px] w-[480px]">
  


    <li className=" w-24 mt-10 text-2xl h-8 text-gray-500 hover:text-gray-700 font-semibold"><Link to="/">Home </Link></li>
    <li className="  w-24 mt-10 text-2xl h-8 text-gray-500 hover:text-gray-700 font-semibold "><Link to="/">🛒 Cart </Link></li>
    <li className="   w-24 mt-10 text-2xl h-8 text-gray-500 hover:text-gray-700 font-semibold"><Link to="/contact">Contact </Link></li>
    <li className="  w-24 mt-10 text-2xl h-8 text-gray-500 hover:text-gray-700 font-semibold"><Link to="/about">About </Link></li>
    

    
</ul>


        </div>
    )
}
export default Header;