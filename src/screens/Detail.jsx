import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DrinkDetailCard from '../components/DrinkDetailCard';

function Detail() {
    const [drink, setDrink] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const { idDetail } = useParams();

    // LLAMADO A LA API PARA TRAER TRAGOS POR ID
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDetail}`)
            .then((res) => res.json())
            .then((data) => setDrink(data.drinks))
            .catch((error) => console.log(error));
    }, []);

    // TRAER LOS FAVORITOS DE LOCAL STORAGE Y GUARDARLOS EN UN ESTADO
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        storedFavorites && setFavorites(storedFavorites);
    }, []);

    return (
        <article className="flex justify-center items-center">
            {drink.length > 0 ? (
                <DrinkDetailCard drink={drink[0]} favorites={favorites} setFavorites={setFavorites} />
            ) : (
                <p>Loading...</p>
            )}
        </article>
    );
}

export default Detail;
