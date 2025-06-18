import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter , Outlet, RouterProvider} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./Components/Cart";
// import Grocery from "./Components/Grocery";

// const heading=React.createElement("h1",{id:"heading"},"This is react");
// const jsxHeading=<h1 id="heading">Hello React using jsx</h1>

const Grocery=lazy(()=> import("./Components/Grocery"))
const AppLayout=()=>{
    const [userInfo,setUserInfo]=useState();
    useEffect(()=>{
        const data={
            name: "Nikhil Agrawal",
        };
        setUserInfo(data.name);
        
    })
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userInfo , setUserInfo}}>
    <div className="app">
    {/* <UserContext.Provider value={{ loggedInUser:"Steve Jobs"}}> */}
        <Header/>
        {/* </UserContext.Provider> */}
        <Outlet/>
    </div>
        </UserContext.Provider>
        </Provider>
    )
}
const appRouter = createBrowserRouter([
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
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
        ],
        errorElement:<Error/>  
    },
    
])

 const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);