import { useEffect, useState } from 'react';
import DrinkCard from '../components/DrinkCard';

function Home() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
            .then((res) => res.json())
            .then((data) => setDrinks(data.drinks));
    }, []);

    return <section>
        <ul className='flex flex-wrap gap-6'>
        {drinks.length > 0 ? (
            drinks.slice(0, 20).map(drink => <DrinkCard key={drink.idDrink} drink={drink}/>)
        ) : (
        <p>Loading...</p>
    )}

        </ul>
    </section>;
}

export default Home;
