import {useState} from "react";
import Food_item from "./Food_item";
const ResCategory=(props)=>{
    const {catData}=props;
const [show,setShow]=useState(false);
const [arrow,setArrow]=useState("🔽")
const expand=()=>{
    setShow(!show);
    arrow=="🔽"?setArrow("🔼"):setArrow("🔽");
}

// console.log(catData.card.card.itemCards);
    return (
        <>
        <div className="w-[840px] h-[60px]  mx-auto bg-red-200  mb-[11px]  flex justify-between cursor-pointer rounded-2xl shadow-lg items-center hover:scale-[1.02] transition-transform duration-300"  onClick={expand} >

<div className="text-gray-600 font-semibold text-lg ml-3">{catData.card.card.title}   ({catData.card.card.itemCards.length})</div>
<div className="my-auto mx-3">{arrow}</div>


        </div>


        ``

    {show && <Food_item items={catData.card.card.itemCards} />}

       
        </>
    );
};
export default ResCategory;