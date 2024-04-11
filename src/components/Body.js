import { useState, useEffect } from 'react';
import { EAT_SURE_API } from '../const';
import Cards from './Cards';
import axios from 'axios';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();

    return () => {
      // code cleanup
    };
  }, []);

  async function getData() {
    try {
      const { data } = await axios.get(
        `${EAT_SURE_API}/get_restaurants?store_id=10133&city_id=7995&`
      );
      if (data) {
        setData(data.data.data);
        setFilteredData(data.data.data);
        setLoading(false);
      }
    } catch (e) {
      alert('Couldnot fetch the data');
    }
  }

  function handleSearch(e) {
    const filteredData = data.filter((item) => {
      return item?.brand_name
        .toLocaleLowerCase()
        .includes(searchText?.toLocaleLowerCase());
    });
    setFilteredData(filteredData);
  }

  const isOnline = useOnline();

  if(!isOnline) {
    return (<h1>🛑 You are offline, Please check your internet connection. </h1>)
  }

  return (
    <div className="body">
      <div className='search-container p-5 bg-pink-50 my-5'>
        <input
          className='focus:bg-purple-50'
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className='p-2 m-2 bg-purple-800 text-white rounded-md hover:bg-purple-900' onClick={handleSearch}>Submit</button>
      </div>
      <div className="flex flex-wrap">
        {loading ? (
          <Shimmer />
        ) : data.length === 0 ? (
          <h1>No Restaurant Found</h1>
        ) : (
          filteredData.map((restaurant) => {
            return (
              <Link
                to={`/restaurant/${restaurant.brand_id}`}
                key={restaurant.brand_id}
              >
                <Cards restaurant={restaurant} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
