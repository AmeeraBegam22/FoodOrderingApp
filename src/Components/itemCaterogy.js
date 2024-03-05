import { useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = ({data, showItems, setshowIndex}) => {

  //  const [showItems, setshowItems] = useState(false);
  //  console.log(data);
  const Handleclick = () => {
    setshowIndex();
  //  setshowItems(!showItems); //this is how we build a toggle feature (if showitem is true make it false and viceversa)
    //console.log("clicked");
  }
    return (
        <div>
            {/* Header accordian */}
            <div className="w-6/12 mx-auto my-4 py-4  bg-gray-50 shadow-xl px-2 cursor-pointer">
                <div className="flex justify-between" 
                onClick={Handleclick}>
                <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                <span>{'🔰'}</span> </div>
                {/* body accordian */}
                {showItems && <CategoryList items ={data?.itemCards}/> } 
        
               

            </div>
        </div>
    );
};
export default RestaurantCategory;