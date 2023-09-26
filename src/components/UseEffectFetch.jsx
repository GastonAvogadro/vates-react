import { useEffect, useState } from 'react';

function UseEffectFetch() {
    const [drinks, setDrinks] = useState([]);
    const [search, setSearch] = useState('margarita');

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res) => res.json())
            .then((data) => setDrinks(data.drinks))
            .catch((err) => console.error(err));
    }, [search]);

    const handleDrinks = (str) => {
        setSearch(str);
    };

    return (
        <section>
            <button onClick={() => handleDrinks('tequila')} className="border border-gray-800 px-4 py-2">
                Traer tequilas
            </button>
            <ul>
                {drinks.length > 0 ? (
                    drinks.map((drink) => {
                        return (
                            <li key={drink.idDrink}>
                                <img src={drink.strDrinkThumb} className='w-[200px]' alt="" />
                                <p>{drink.strDrink}</p>
                            </li>
                        );
                    })
                ) : (
                    <p>Cargando...</p>
                )}
            </ul>
        </section>
    );
}

export default UseEffectFetch;
