import {LOGO_URL} from "../utils.js/constants";
import { Link } from "react-router-dom";


const Header=()=>{
    return (
        <div className="header">
<div className="logo-container">
    <img className="logo" src={LOGO_URL} />
</div>
<div className="nav-items"> 
<ul>
  

    <div className="li-items">

    <div><li><Link to="/">Home </Link></li></div>
    <div><li><Link to="/">🛒 Cart </Link></li></div>
    <div><li><Link to="/contact">Contact </Link></li></div>
    <div><li><Link to="/about">About </Link></li></div>
    
    </div>

    
</ul>
</div>

        </div>
    )
}
export default Header;