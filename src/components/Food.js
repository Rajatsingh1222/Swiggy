import { useDispatch } from "react-redux";
import { addItems ,removeItems} from "../utils.js/cartSlice";
import { useState,useContext } from "react";
import { UserContext } from "./RestMenu";
const Food=(props)=>{
    // const Itemss=useSelector((store)=>store.cart.items)
    const id = useContext(UserContext);
    console.log(id)
    const[text,setText]=useState("add");
    const[click,setClick]=useState(false);
    const handle=()=>{
    }
    const {data}=props;
    const dispatch=useDispatch();
    const  Itemsfun=(data)=>{
        click?dispatch(removeItems(data)):dispatch(addItems(data,id));
        click?setText("add"):setText("added");
        setClick(!click);
};
    return (
        <button className="w-[65px] bg-black h-[28px] mt-[-22px] ml-3 absolute rounded-lg font-mono hover:scale-[0.95] transition-all duration-100 text-lg font-semibold text-gray-300 text-center" onClick={()=>{Itemsfun(data)}}>{text}</button>
    );
};
export default Food;