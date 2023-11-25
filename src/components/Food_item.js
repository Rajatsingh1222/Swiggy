const Food_item=(props)=>{
    const {menuData}=props;
        var x;
        {menuData.card.info.imageId?x="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+menuData.card.info.imageId:x="https://i.pinimg.com/1200x/dc/38/85/dc388547a4462f7bbe31c48c8627ddf9.jpg"};

    return (
        <>

        <hr className="hrr"/>
        <div className="menu-dish-parent">
        <li className="menu-dish" key={menuData.card.info.id}>{menuData.card.info.name}<img   src={x}/> </li>
        </div>
        
        </>
    )
};
export default Food_item;