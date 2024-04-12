import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({background_url, brand_name, main_offering, brand_id}) => {

    const dispatch = useDispatch();

    const handleRemoveItem = (brand_id) => {
        dispatch(removeItem(brand_id))
    }

    return (
      <div className="w-56 h-76 p-2 m-2 shadow-lg bg-pink-50">
        <button onClick={() => handleRemoveItem(brand_id)}>❌</button>
        <img src={background_url} alt="bgImage"></img>
        <h2 className="font-bold text-xl">{brand_name}</h2>
        <h4>Main offering - {main_offering}</h4>
      </div>
    );
  };
  
  export default FoodItem;
  