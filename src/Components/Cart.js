import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";

const Cart = () => {
    const cartItems = useSelector((store ) => store.cart.items);

    return(
        <div className="p-2 m-2 text-center ">
            <h1 className="font-bold"> Cart</h1>
            <div className="w-6/12 m-auto">
                <CategoryList items= {cartItems}/>
            </div>
        </div>
    );
};
export default Cart;