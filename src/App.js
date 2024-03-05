import React, { useEffect, useState } from "react"
import  ReactDOM  from "react-dom/client"; 
import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //RouterProvider will give us routing configuration to our app
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import ResMenu from "./Components/ResMenu";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";
import Cart from "./Components/Cart";
//import { resList } from "./Utils";


const Applayout= () =>
{

    const [userName, setuserName ] = useState();
    //Authentication code

    useEffect( () =>
    {
        const data = {
            name : 'Noordeen',
        }
        setuserName(data.name);
    });
    return( 
        // store is a prop
        <Provider store={Appstore}> 
        <div className="applayout">
        <Header/>
        {/*is used when you have to change/update the data. //value is a prop  */}
        <userContext.Provider value = {{loggedInUser : userName}}> 
        <Outlet/>
        </userContext.Provider>
        
    </div>
    </Provider>  
  
    );
   
};
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Applayout/>,
        children : [
                {
                    path: '/',
                    element: <Body/>
                },
                {
                    path: '/About',
                    element: <About/>
                },
                {
                    path: '/contact',
                    element:<Contact/>
                },
                {
                    path: '/restaurants/:resId',
                    element: <ResMenu/>
                },
                {
                    path: '/cart',
                    element: <Cart/>
                },
            
        ],
        errorElement: <Error/>,
        
    }, 
]); 
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);