const RestCard=(props)=>{
    const {resData}=props;

    
    return (
        <>
        <div className="res-card w-52 hover:scale-105 transition-all duration-200 m-1 h-[auto] ease-out mb-5">
        <img className="card-img h-36 w-52" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +resData.info.cloudinaryImageId }
        ></img>

        <div className="card-text-1 pl-2 text-lg font-bold text-gray-600">
        <h3>{resData.info.name}</h3>
        </div>


   <div className="card-text-2 ">
       <div className="style-rating-2 pl-2 text-gray-600"> {resData.info.avgRating }</div>
   <div className="style-rating-3 pl-2 text-gray-600 ">{resData.info.sla.slaString}</div>
        
   </div>
        
       
        <div className="card-text-3 pl-2">

        <div className=" overflow-hidden text-gray-600">{resData.info.cuisines.join(",")}</div>
        </div>
        


        

        </div>
        {/* <div className="res-carda"></div> */}
        </>
    )
}
export default RestCard;