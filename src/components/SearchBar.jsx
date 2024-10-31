const SearchBar = ({ setSearchValue }) => {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form className="relative self-stretch">
      <div className="absolute left-4 top-1/2 translate-y-[-50%]">
        <svg
          className="fill-customize-gold dark:fill-custom-gray"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="search">
            <path
              id="Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z"
            />
          </g>
        </svg>
      </div>
      <input
        type="text"
        onChange={handleSearchChange}
        name="search"
        placeholder="Search for Haj info."
        className="h-10 w-[490px] placeholder:text-customize-gold focus:outline-none pl-12 border rounded-md border-customize-gold"
      />
    </form>
  );
};

export default SearchBar;
