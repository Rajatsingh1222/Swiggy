import {useState} from "react";
import Food_item from "./Food_item";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "./Cart";
const ResCategory=(props)=>{
    const {catData}=props;
const [show,setShow]=useState(false);
const [arrow,setArrow]=useState("🔽")
const expand=()=>{
    setShow(!show);
    arrow=="🔽"?setArrow("🔼"):setArrow("🔽");
}
const Items=useSelector((store)=>store.cart.items)

    return (
        <>
        <div className="w-[840px] h-[60px]  mx-auto bg bg-white  my-[10px]  flex justify-between cursor-pointer rounded-s shadow-md items-center hover:scale-[1.02] transition-transform duration-300 hover:shadow-lg hover:border-l-black border-2"  onClick={expand} >

<div className="text-gray-600 font-semibold text-lg ml-3">{catData.card.card.title}   ({catData.card.card.itemCards.length})</div>
<div className="my-auto mx-3">{arrow}</div>
  

        </div>
{show && <Food_item items={catData.card.card.itemCards} />}

       { Items.length!=0?<div className="   flex justify-center items-center">
       <><Link to="/cart" className="flex justify-center"><button className="w-6/12 h-14 rounded-md  bottom-1 bg-green-400  border-[2px]  border-purple-700 fixed z-10 flex justify-around items-center font-bold text-white">View CART 
       <div>{Items.length} items added</div></button></Link>
       </>
       </div>:<></>}
       
        </>
    );
};
export default ResCategory;
{/* <Link to="/cart">🛒 ({sum}-items) </Link> */}