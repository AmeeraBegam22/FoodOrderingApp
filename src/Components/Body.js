import Rescard from "./Restaurantcard";
//import { resList } from "../utils/Mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatusOnline from "./useOnlineStatus";
const Body = () => 
{ 
    const [listofRestaurants, setlistofRestaurants ]= useState([]); 
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [Searchtext, setSearchtext] = useState("");

    useEffect(() =>
     { fetchData();}
       , []);

    const fetchData = async() => {
        const data = await fetch("https://b583cbf1a3cf49c985e2d57062e1a039.api.mockbin.io/");
        
         const json = await data.json(); 
           
       console.log(json); 
      console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setlistofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
      setfilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };
    const CheckOnline = useStatusOnline();

    if(CheckOnline === false) return <h2> Looks like you are offline!!! Check your online stauts...</h2>

    return listofRestaurants.length === 0 ? (
   <Shimmer/> ) : (
     <div className="body">
        <div className="flex">
            <div className="search m-3 p-3">
                <input type="text" 
                className="border border-solid border-black"
                value ={Searchtext}
                onChange={(e) => {
                    setSearchtext(e.target.value);
                }}
               
                />
                <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                 onClick={() => {
                   const filteredRestaurants = listofRestaurants.filter(
                     (res) => res.info.name.toLowerCase().includes(Searchtext.toLowerCase()));

                     setfilteredRestaurants(filteredRestaurants);
                    console.log("search clicked");
                }}>Search</button>
             </div>
             <button 
             className="px-4 py-1 bg-gray-100 m-10 rounded-lg"
             onClick={ () => {
                const  filteredList = listofRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setlistofRestaurants(filteredList);
             }}>Top Rated Restaurant</button>
            </div>
          
            
          <div className="flex flex-wrap p-2">
             
             {
                filteredRestaurants.map((Restaurant) => (
                   <Link
                    key={Restaurant.info.id} 
                   to ={ '/restaurants/' + Restaurant.info.id}>
                    <Rescard  resData = {Restaurant}/>
                    </Link> 
                ))
             }
             </div>
        </div>     
    );
};

export default Body;