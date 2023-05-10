/* eslint-disable react/prop-types */
function Card({ countries }) {
  return (
    <div className="m-4 w-80 flex flex-col shadow-lg cursor-pointer h-[430px]">
      <img src={countries.flag} alt="" />
      <div className="p-8 flex-col flex">
        <h3 className="font-extrabold text-xl mb-4">{countries.name}</h3>
        <span>
          <span className="font-semibold mr-1">Population:</span>
          {countries.population.toLocaleString()}
        </span>
        <span>
          <span className="font-semibold mr-1">Region:</span>
          {countries.region}
        </span>
        <span>
          <span className="font-semibold mr-1">Capital:</span>
          {countries.capital}
        </span>
      </div>
    </div>
  );
}

export default Card;
