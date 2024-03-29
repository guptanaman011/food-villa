import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useRestaurant = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    async function getRestaurantInfo() {
      try {
        const { data } = await axios.get(
          `https://www.eatsure.com/v1/api/get_brand_details/brand_id/${id}/store_id/10133`
        );
        setRestaurant(data?.data?.data[0]);
      } catch (e) {
        console.log('gettting error', e);
      }
    }
    getRestaurantInfo();

    return () => {
      // code cleanup
    };
  }, [id]);

  return restaurant;
};

export default useRestaurant;
