import { LOGO_URL } from "../utils/Constant";
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import useStatusOnline from "./useOnlineStatus";
import userContext from "../utils/userContext";
import {  useSelector } from "react-redux";
const Header = () => {
  //  let btnName = "Login"
    const [btnNamereact, setbtnNamereact] = useState("Login")  // '"login" is initial value
    const OnlineStatus  = useStatusOnline();
    const {loggedInUser} = useContext(userContext);
    //console.log(username);

        //subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
    <div className="logo-container">
        <img 
        className="w-20"
        src={LOGO_URL}></img>
    </div>
     <div className="felx items-center">
        <ul className="flex p-4 m-4">
            <li className="p-4"> OnlineStatus: {OnlineStatus ? "✔" : "🛑"} </li>
            <li className="p-4"> 
                <Link to ='/'>homepage</Link>
            </li>
               
            <li className="p-4">
                <Link to ='/Contact'>ContactUs</Link>
             </li>    

            <li className="p-4">    
              <Link to ='/About'>About</Link>
            </li>
  
            <button
             className="Logout" 
             onClick={() => {
                btnNamereact === "Login"
                 ? setbtnNamereact("Logout")
                  : setbtnNamereact("Login");
               //  console.log(btnName)
            }
           }>{btnNamereact}
           </button>
           <li className="p-4"> 
           <Link to = '/cart' >Cart- ({cartItems.length}items)
           </Link>
           </li>
           <li className="p-4">{loggedInUser}</li>
       </ul>
    </div>  
</div>

    );

};

export default Header;