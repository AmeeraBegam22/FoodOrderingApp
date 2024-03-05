import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
//import { MENU_API } from "../utils/Constant";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./itemCaterogy";

const ResMenu = () => {
    const [resInfo, setresInfo] = useState(null);
    const {resId} = useParams();
    const [showIndex, setshowIndex] = useState(null);

   useEffect(() => {
        Fetchmenu();
    }, []); 

    const Fetchmenu = async() => {
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.9601852&lng=79.3844976&restaurantId="+resId+ "&catalog_qa=undefined&submitAction=ENTER") ;
        const json = await data.json();
       // console.log(json);

        setresInfo(json.data);
    };
    if(resInfo === null) return <Shimmer/>

    const {itemCards} =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
   // console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
   // console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const itemCategories =  resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (c) => 
    c?.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
   // console.log(itemCategories);

    return(
        <div className="menu-list">
        <h1 className="text-center font-bold py-2">{name}</h1>
        <p className="text-center font-serif py-2 font-thin">{cuisines.join(', ')} - {costForTwoMessage}</p>
        <div className="text-center py-2">
            {/* itemCategory accordian */}
            {itemCategories.map( (category, index) =>(<RestaurantCategory
             key ={category?.card?.card?.title}
            data= {category?.card?.card }
            showItems={index == showIndex && true}
            setshowIndex = { () => setshowIndex(index)}
            />
          
             ) )}
        </div>
       
        </div>
    );

};
export default ResMenu;

