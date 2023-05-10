/* eslint-disable react/prop-types */
function CardDetail({ country }) {
  return (
    <div className="flex flex-col  md:flex-row">
      <div className="flex-1 mt-20">
        <img src={country.flag} alt="flag" className="w-full" />
      </div>
      <div className="flex-1 mt-20 ml-20">
        <div className="mt-12">
          <span className="text-4xl font-extrabold ">{country.name}</span>
        </div>
        <div className="flex mt-12 flex-col lg:flex-row">
          <div className="flex-1 flex-col flex gap-2">
            <span>
              <span className="font-semibold mr-2">Native Name:</span>
              {country.nativeName}
            </span>
            <span>
              <span className="font-semibold mr-2">Population:</span>
              {country.population.toLocaleString()}
            </span>
            <span>
              <span className="font-semibold mr-2">Region:</span>
              {country.region}
            </span>
            <span>
              <span className="font-semibold mr-2">Sub Region:</span>
              {country.subregion}
            </span>
            <span>
              <span className="font-semibold mr-2">Capital:</span>
              {country.capital}
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2 mt-16 lg:mt-0">
            <span>
              <span className="font-semibold mr-2">Top Level Domain:</span>
              {country.topLevelDomain}
            </span>
            <span>
              <span className="font-semibold mr-2">Currencies:</span>
              {country.currencies.map((currencie, idx) => (
                <span key={idx}>{currencie.name}</span>
              ))}
            </span>
            <span>
              <span className="font-semibold mr-2">Languages:</span>
              {country.languages.map((lang, idx) => (
                <span className="first-letter:uppercase" key={idx}>
                  {`${lang.name} `}
                </span>
              ))}
            </span>
          </div>
        </div>
        <div className="mt-20 flex items-start md:items-center flex-col md:flex-row flex-wrap">
          <span className="font-semibold mr-2">Border Countries:</span>
          {country.borders?.map((border, idx) => (
            <span className="px-4 py-3 shadow" key={idx}>
              {border}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
