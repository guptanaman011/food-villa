const Cards = (props) => {
  const { restaurant } = props;
  return (
    <div className="w-56 h-96 p-2 m-2 shadow-lg bg-pink-50">
      <img src={restaurant.background_url_large} alt="bgImage"></img>
      <h2 className="font-bold text-xl">{restaurant.brand_name}</h2>
      <h3>{restaurant.description}</h3>
      <h4>Main offering - {restaurant.main_offering}</h4>
    </div>
  );
};

export default Cards;
