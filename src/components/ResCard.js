const RestCard=(props)=>{
    const {resData}=props;
    const green={
       
        backgroundColor:"lightGreen",
        
        
    };
    const blue={
        backgroundColor:"skyBlue",
       
    };
    const yellow={
        backgroundColor:"yellow",
        
    };
    
    return (
        <>
        <div className="res-card">
        <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +resData.info.cloudinaryImageId }
        ></img>

        <div className="card-text-1">
        <h3>{resData.info.name}</h3>
        </div>


   <div className="card-text-2">
       <div className="style-rating-1" style={resData.info.avgRating>=4?green:(resData.info.avgRating>3.5?blue:yellow)}><img src="https://e7.pngegg.com/pngimages/587/114/png-clipart-computer-icons-open-grey-star-angle-white.png"/></div>
       <div className="style-rating-2"> {resData.info.avgRating }</div>
   <div className="style-rating-3">{resData.info.sla.slaString}</div>
        
   </div>
        
       
        <div className="card-text-3">

        <div>{resData.info.cuisines.join(",")}</div>
        </div>
        


        

        </div>
        {/* <div className="res-carda"></div> */}
        </>
    )
}
export default RestCard;