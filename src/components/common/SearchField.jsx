import React, { useState, useContext } from "react";
import { ImageContext } from "../../store/ImageContext";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { loadData, setSearchQuery } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleButtonSearch = (e) => {
    setSearchValue("");
    setSearchQuery(searchValue);
    loadData(searchValue);
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      setSearchValue("");
      setSearchQuery(searchValue);
      loadData(searchValue);
    }
  };

  return (
    <div className="items-center mb-7 mt-10 pt-7">
      <div className="max-w-xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-white mb-5">Find Images</h1>
        <div className="flex">
          <input
            className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-sky-500 focus:ring-2 rounded-tl rounded-bl"
            type="search"
            placeholder="Search for images"
            value={searchValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterSearch}
          ></input>
          <button
            onClick={handleButtonSearch}
            disabled={!searchValue}
            className="bg-sky-500 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue300"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchField;