import { useEffect, useState } from 'react';
import DrinkCard from '../components/DrinkCard';

function Favorites() {
    const [favoriteDrinks, setFavoriteDrinks] = useState([]);
    const [favorites, setFavorites] = useState([]);

    // LLAMADO A LA API POR CADA ELEMENTO GUARDADO EN EL FAVORITES DE LOCAL STORAGE
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

        if (storedFavorites.length > 0) {
            Promise.all(
                storedFavorites.map((id) =>
                    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((res) => res.json())
                )
            )
                .then((data) => setFavoriteDrinks(data.map((response) => response.drinks[0])))
                .catch((error) => console.error(error));
                
                setFavorites(storedFavorites);
        }
    }, []);

    // Función para quitar un trago de la lista de favoritos
    const removeFavorite = (drinkId) => {
        const updatedFavorites = favorites.filter((id) => id !== drinkId);
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavoriteDrinks(favoriteDrinks.filter((drink) => drink.idDrink !== drinkId));
    };

    return (
        <div>
            <h2 className="text-center my-6">FAVORITES</h2>
            <ul className="flex justify-center items-center flex-wrap gap-6">
                {favoriteDrinks.length > 0 ? (
                    favoriteDrinks.map((drink) => (
                        <DrinkCard
                            key={drink.idDrink}
                            drink={drink}
                            favorites={favorites}
                            setFavorites={setFavorites}
                            removeFavorite={removeFavorite}
                        />
                    ))
                ) : (
                    <p>No hay bebidas favoritas guardadas.</p>
                )}
            </ul>
        </div>
    );
}

export default Favorites;
