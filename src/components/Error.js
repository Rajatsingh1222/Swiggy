import { useRouteError } from "react-router-dom";
const Error=()=>{
const err=useRouteError();
console.log(err);
return (
    <>

    <div><h1>Error{err.status} </h1></div>
    <div><h1>{err.statusText} </h1></div>
    </>
)
}
export default Error;