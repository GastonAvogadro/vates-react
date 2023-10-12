import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DrinkDetailCard from '../components/DrinkDetailCard';

function Detail() {
    const [drink, setDrink] = useState([]);
    const { idDetail } = useParams();

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDetail}`)
            .then((res) => res.json())
            .then((data) => setDrink(data.drinks));
    }, []);

    return <div>{drink.length > 0 ? <DrinkDetailCard drink={drink[0]} /> : <p>Loading...</p>}</div>;
}

export default Detail;
