const Shimmer = () => {
  return (
    <div className="w-56 h-96 p-2 m-2 shadow-lg bg-gray-100">
      {Array(10)
        .fill('')
        .map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
