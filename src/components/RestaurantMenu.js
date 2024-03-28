import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    async function getRestaurantInfo() {
      try {
        console.log('fetching...');
        const { data } = await axios.get(
          `https://www.eatsure.com/v1/api/get_brand_details/brand_id/${id}/store_id/10133`
        );
        setRestaurant(data?.data?.data[0]);
      } catch (e) {
        console.log('gettting error', e);
      }
    }
    getRestaurantInfo();
  }, [id]);

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
