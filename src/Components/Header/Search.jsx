import React, { useContext, useState } from "react";
import search from "../../assets/assets/search.svg";
import { LocationContext } from "../../Context";
import { getLocationByName } from "../../data/location_data";
import useDebounce from "../../hooks/useDebounce";

const From = () => {
  const [SearchTerm, setSearchTerm] = useState("");

  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((tram) => {
    const fetchedLocation = getLocationByName(tram);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  function HandleChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  }

  return (
    <>
      {" "}
      <form action="#">
        <div class="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            class="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            onChange={HandleChange}
            required
          />
          <button type="submit">
            <img src={search} alt="Search" />
          </button>
        </div>
      </form>
    </>
  );
};

export default From;
