import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
  // Custom hook
  const restaurant = useRestaurant();

  if (restaurant === null) {
    return <Shimmer />;
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>Restaurant Id: {restaurant?.brand_id}</h1>
      <h2>Restaurant Name: {restaurant?.brand_name}</h2>
      <img src={restaurant?.rectangle_logo} alt="logo" />
      <h3>Special: {restaurant?.main_offering}</h3>
      <h3>Slug: {restaurant?.slug}</h3>
      {restaurant?.discount_info && restaurant.discount_info.length > 0 ? (
        <ul>
          {Object.keys(restaurant?.discount_info[0]).map((item, index) => {
            return (
              <li key={index}>
                <b>{`${item} - ${restaurant.discount_info[0][item]}`}</b>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default RestaurantMenu;
