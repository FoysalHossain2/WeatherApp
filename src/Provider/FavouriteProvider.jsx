import { FavoriteContext } from "../Context";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoriteProvider = ({ children }) => {
  const [Favorite, setFavorite] = useLocalStorage("Favorite", []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorite([
      ...Favorite,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavorites = (location) => {
    const restFavorites = Favorite.filter((fav) => fav.location !== location);

    setFavorite(restFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{ Favorite, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
