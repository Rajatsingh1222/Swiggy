const Food_item=({items})=>{
console.log(items);
    // {menuData.card.info.imageId?x="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+menuData.card.info.imageId:x="https://i.pinimg.com/1200x/dc/38/85/dc388547a4462f7bbe31c48c8627ddf9.jpg"};

    return (
        <>
       {items.map(items=> <div key={items.card.info.id} className=" w-7/12 h-[115px] cursor-pointer bg-gray-100 flex justify-between mx-auto hover:scale-[1.01] mb-3 shadow-md transition-all duration-300 rounded-3xl">
        <div className="text-gray-500 font-semibold text-2xl mt-2 ml-2">{items.card.info.name}</div>
        <div className="w-[110px] rounded-md mt-2" > <img   className="w-[95px] h-[95px] rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+items.card.info.imageId}/> 
        <div className="w-[70px] bg-black h-[25px] mt-[-18px] ml-3 absolute rounded-md font-mono antialiased text-lg font-semibold text-gray-300 text-center">Add+</div>
        </div>
        </div>)}
       
        

        </>
    )
};
export default Food_item;