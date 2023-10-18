import { useEffect, useState } from 'react';
import DrinkCard from '../components/DrinkCard';

function Home() {
    const [drinks, setDrinks] = useState([]);
    const [favorites, setFavorites] = useState([]);

    // LLAMADO A LA API PARA TRAER TODOS LOS COCKTAIL
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            .then((res) => res.json())
            .then((data) => setDrinks(data.drinks))
            .catch((error)=> console.log(error))
    }, []);

    // TRAER LOS FAVORITOS DE LOCAL STORAGE Y GUARDARLOS EN UN ESTADO
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        storedFavorites && setFavorites(storedFavorites);
    }, []);

    return (
        <section>
            <ul className="flex justify-center items-center flex-wrap gap-6">
                {drinks.length > 0 ? (
                    drinks
                        .slice(0, 20)
                        .map((drink) => (
                            <DrinkCard
                                key={drink.idDrink}
                                drink={drink}
                                favorites={favorites}
                                setFavorites={setFavorites}
                            />
                        ))
                ) : (
                    <p>Loading...</p>
                )}
            </ul>
        </section>
    );
}

export default Home;
