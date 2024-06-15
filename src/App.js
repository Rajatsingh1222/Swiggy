import React from "react";
import ReactDOM  from "react-dom/client";
import "../index.css";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer";
import About from "./components/About"
import Error from "./components/Error"
import Contact from "./components/Contact"
import RestMenu from "./components/RestMenu"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import City from "./components/City";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appstore from "./utils.js/appstore";





const AppLayout=()=>{
    return (
        <Provider store={appstore}>

        <div className="App">
        
    <Header/>
    <Outlet/>
    <Footer/>
    {/* <About/> */}
        </div>
        </Provider>
    );

};
const appRouter=createBrowserRouter([
{
    path:"/",
    element:<AppLayout/>,
    children:[
    {
        path:"/",
        element:<Body/>
    
    },
    
    {
        path:"/about",
        element:<About/>
    
    },
    {
        path:"/contact",
        element:<Contact/>
    
    },
    {
        path:"/restaurantmenu/:id",
        element:<RestMenu/>
    
    },
    {
        path:"/cart",
        element:<Cart/>
    
    }
            ],
    errorElement:<Error/>
}
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(<RouterProvider router={appRouter}/>);

