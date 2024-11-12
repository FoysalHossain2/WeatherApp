import useLocalStorage from "../hooks/useLocalStorage";

const FavoriteProvider = ({ children }) => {
  const [Favorite, setFavorite] = useLocalStorage("Favorite", []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorite(...Favorite, {
      latitude: latitude,
      longitude: longitude,
      location: location,
    });

    const removeFromFavorites = (loc) => {
      const restFavorites = Favorite.filter((fev) => fev.f);
    };
  };

  return (
    <FavoriteContext.Provider value={{ Favorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
