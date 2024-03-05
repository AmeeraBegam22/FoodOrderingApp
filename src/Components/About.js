import userContext from "../utils/userContext";
import { useContext } from "react";

const About = () => {
    const {loggedInUser} = useContext(userContext);
    return(
        <div className="about">
         <h1>About</h1>
         <h1>{loggedInUser}</h1>
        <h2>Creating Swiggy alike App</h2>
        
    </div>
    );
   
};
export default About;