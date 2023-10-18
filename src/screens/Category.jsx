import { useEffect, useState } from 'react';
import DrinkCard from '../components/DrinkCard';
import { useParams } from 'react-router-dom';
import Filter from '../components/Filter';

function Category() {
    const [drinks, setDrinks] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const { idCategory } = useParams();

    // LLAMADO A LA API PARA TRAER TODOS LOS TRAGOS DE LA CATEGORÍA SELECCIONADA
    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${idCategory}`)
            .then((res) => res.json())
            .then((data) => setDrinks(data.drinks))
            .catch((error) => console.log(error));

        setInputValue('');
    }, [idCategory]);

    // TRAER LOS FAVORITOS DE LOCAL STORAGE Y GUARDARLOS EN UN ESTADO
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
        storedFavorites && setFavorites(storedFavorites);
    }, []);

    // FILTRADO DEL ARRAY USANDO EL VALOR DEL INPUT
    const filteredDrinks = drinks.filter((drink) => drink.strDrink.toLowerCase().includes(inputValue.toLowerCase()));

    return (
        <section>
            <h2 className="text-center my-6">{idCategory.toUpperCase().replace('_', ' ')}</h2>
            <Filter inputValue={inputValue} setInputValue={setInputValue} />
            <ul className="flex justify-center items-center flex-wrap gap-6">
                {filteredDrinks.length > 0 ? (
                    filteredDrinks
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

export default Category;
