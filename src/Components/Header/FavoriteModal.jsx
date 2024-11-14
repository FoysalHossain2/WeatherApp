import React, { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../Context";

const FavoriteModal = () => {
  const { Favorite } = useContext(FavoriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  return (
    <>
      {" "}
      <div class="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
        <h3 class="text-lg font-bold px-4">Favourite Locations</h3>
        <ul class="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {Favorite.length > 0 ? (
            Favorite.map((fav) => (
              <li
                key={fav.location}
                class="hover:bg-gray-200"
                onClick={() => setSelectedLocation({ ...fav })}
              >
                <a href="">{fav.location}</a>
              </li>
            ))
          ) : (
            <p>Favorite Locations is empty</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default FavoriteModal;
