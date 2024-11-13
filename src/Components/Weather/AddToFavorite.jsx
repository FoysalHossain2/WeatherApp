import React, { useContext, useEffect, useState } from "react";
import HeartIcon from "../../assets/assets/heart.svg";
import RedHartIcon from "../../assets/assets/heart_red.svg";
import { FavoriteContext, WeatherContext } from "../../Context";

const AddToFavorite = () => {
  const [IsFavorite, toggleFavorite] = useState(false);

  const { WeatherData } = useContext(WeatherContext);
  const { Favorite, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);

  const { latitude, longitude, location } = WeatherData;

  useEffect(() => {
    const found = Favorite.find((fav) => fav.location === location);
    toggleFavorite(found);
  }, []);

  const HandleFavorite = () => {
    const found = Favorite.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    toggleFavorite(!IsFavorite);
  };

  return (
    <>
      {" "}
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button
            className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
            onClick={HandleFavorite}
          >
            <span>Add to Favourite</span>
            <img src={IsFavorite ? RedHartIcon : HeartIcon} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AddToFavorite;
