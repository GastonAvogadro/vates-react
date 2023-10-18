import { useEffect, useState } from 'react';
import DrinkCard from '../components/DrinkCard';
import { useParams } from 'react-router-dom';

function Results() {
    const [drinks, setDrinks] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const { query } = useParams();

    // LLAMADO A LA API PARA TRAER TODOS LOS TRAGOS QUE COINCIDAN CON LA QUERY
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
            .then((res) => res.json())
            .then((data) => data.drinks && setDrinks(data.drinks));
    }, [query]);

    // TRAER LOS FAVORITOS DE LOCAL STORAGE Y GUARDARLOS EN UN ESTADO
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        storedFavorites && setFavorites(storedFavorites);
    }, []);

    return (
        <section>
            <h2 className="text-center my-6">Results for: {query}</h2>
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

export default Results;
