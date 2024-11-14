import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header.js"
import Body from "./Components/Body.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu.js";


const AppLayout = () => {
    return(
        <div className ="app">
            <Header />
            <Outlet />
        </div>
    )
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[

            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contactUs",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            

        ],

    },
    


    
]
);
     


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
