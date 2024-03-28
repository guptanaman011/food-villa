const Cards = (props) => {
  const { restaurant } = props;
  return (
    <div className="main-card">
      <img src={restaurant.background_url_large} alt="bgImage"></img>
      <h2>{restaurant.brand_name}</h2>
      <h3>{restaurant.description}</h3>
      <h4>Main offering - {restaurant.main_offering}</h4>
    </div>
  );
};

export default Cards;
