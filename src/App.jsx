import { useState } from "react";
import "./App.css";

//Components
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Card from "./components/Card";

import data from "../data.json";
import CardDetail from "./components/CardDetail";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [country, setCountry] = useState(false);
  const [countries] = useState(data);
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const bodyClass = isDarkMode ? "dark-mode" : "light-mode";
  document.body.className = bodyClass;

  const changeCountries = active
    ? countries.filter((c) => c.region == active)
    : countries;

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div>
      <Header
        toggleMode={toggleMode}
        isDarkMode={isDarkMode}
        setCountry={setCountry}
        setText={setText}
      />
      <div className="container mx-auto">
        <Inputs
          country={country}
          setCountry={setCountry}
          setActive={setActive}
          setText={setText}
        />

        {country ? (
          <CardDetail country={country} />
        ) : (
          <>
            <section className="mx-auto">
              <ul className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
                {!text
                  ? changeCountries.map((c) => (
                      <li key={c.numericCode} onClick={() => setCountry(c)}>
                        <Card countries={c} />
                      </li>
                    ))
                  : filteredCountries.map((c) => (
                      <li key={c.numericCode} onClick={() => setCountry(c)}>
                        <Card countries={c} />
                      </li>
                    ))}
              </ul>
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
