import { useSelector } from "react-redux";
import FoodItem from "./foodItem";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cardItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1 className="font-bold text-3xl">Cart items - {cardItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-2"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cardItems.map((item) => {
          return <FoodItem key={item.brand_id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
