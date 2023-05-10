/* eslint-disable react/prop-types */
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function Header({ toggleMode, isDarkMode, setCountry, setText }) {
  function setBG() {
    const currentBG = isDarkMode
      ? "bg-[var(--darkBlue)]"
      : "bg-[var(--lightBG)]";
    return currentBG;
  }

  function handleReset() {
    setCountry(false);
    setText("");
  }

  return (
    <header className={`px-4 py-8 border-b ${setBG()} shadow sticky top-0`}>
      <div className="flex justify-between  container mx-auto">
        <span
          className="font-extrabold text-lg sm:text-2xl cursor-pointer"
          onClick={handleReset}
        >
          Where in the world ?
        </span>
        <button
          className="flex gap-2 items-center justify-center cursor-pointer"
          onClick={toggleMode}
        >
          <DarkModeOutlinedIcon />
          <span className="font-semibold">Dark Mode</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
