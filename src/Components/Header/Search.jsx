import React, { useContext, useState } from "react";
import { LocationContext } from "../../Context";

const From = () => {
  const [SearchTerm, setSearchTerm] = useState("");

  const { setSelectedLocation } = useContext(LocationContext);

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {" "}
      <form action="#" onSubmit={HandleSubmit}>
        <div class="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            class="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            type="search"
            placeholder="Search Location"
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button type="submit">
            <img src="./assets/search.svg" />
          </button>
        </div>
      </form>
    </>
  );
};

export default From;
