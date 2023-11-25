import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const City=()=>{
    return(
        <div class="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          {/* <Link to={"city/"+"lat=28.7040592&lng=77.10249019999999"}>Delhi</Link>
          <Link to={"city/"+"lat=27.9462395&lng=80.7787163"}>Lakhimpur</Link>
          <Link to={"city/"+"lat=19.0759837&lng=72.8776559"}>Mumbai</Link>
          <Link to={"city/"+"lat=26.8466937&lng=80.94616599999999"}>Lucknow</Link> */}
         
         
        </div>
      </div>
    );
}
export default City;