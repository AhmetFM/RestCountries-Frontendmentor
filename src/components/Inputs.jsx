/* eslint-disable react/prop-types */
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Inputs({ country, setCountry, setActive, setText, text }) {
  function handleActive(e) {
    setActive(e.target.value);
  }

  function handleText(e) {
    setText(e.target.value);
  }

  return (
    <div className="flex justify-between flex-col sm:flex-row">
      {country ? (
        <button
          onClick={() => setCountry(false)}
          className="mx-4 my-4 shadow-xl hover:opacity-50 transition px-6 py-3 flex items-center gap-3"
        >
          <ArrowBackIcon />
          Back
        </button>
      ) : (
        <>
          <input
            className="mx-4 my-4 px-20 py-4 rounded-lg border-0 text-sm shadow"
            placeholder="Search for a country..."
            type="text"
            value={text}
            onChange={handleText}
          />
          <select
            className="w-60 rounded-lg px-6 py-4 mx-4 my-4 text-sm"
            name="region"
            id="region"
            defaultValue={"filter"}
            onChange={handleActive}
          >
            <option value="filter" disabled hidden>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </>
      )}
    </div>
  );
}

export default Inputs;
