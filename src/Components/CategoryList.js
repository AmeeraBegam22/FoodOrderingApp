import { addItems } from "../utils/cartSlice";
import {  useDispatch } from "react-redux";

const CategoryList = ({items}) => {
   // console.log(items);
   const dispatch = useDispatch();
   const handleItem = (item) => {
        //dispatch an action
        dispatch(addItems(item));
   };
    return(
      
        <div>
           {items.map((item) => (
           <div className="text-left py-2 border-b-2 flex justify-between" key ={item?.card?.info?.id}>
            <div>
            <div className="font-semibold">
                <span>{item?.card?.info?.name}</span>
                <span> ₹ { (item?.card?.info?.price)/100 }</span>
            </div>
            <div>
            <p className="font-extralight py-2">{item?.card?.info?.description}</p>
            </div>
            </div>
            <div  className=" bg-white text-green-300 font-semibold hover:bg-slate-50 m-2 cursor-pointer shadow-xl rounded-lg px-4 py-2">
            <button onClick={() => handleItem(item)}> ADD  </button>
            </div>
           
           </div> 
           ))}
        </div>
    );

};
export default CategoryList