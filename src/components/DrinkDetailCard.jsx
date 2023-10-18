import { useState } from 'react';

function DrinkDetailCard(props) {
    const [favorite, setFavorite] = useState(false);

    const handleFavorite = () => {
        const updatedFavorites = props.favorites.includes(props.drink.idDrink)
            ? props.favorites.filter((id) => id !== props.drink.idDrink)
            : [...props.favorites, props.drink.idDrink];

        props.setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        setFavorite(!favorite);
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={props.drink.strDrinkThumb} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.drink.strDrink}</h2>
                <div className="card-actions justify-end">
                    <button onClick={handleFavorite} className="btn btn-primary">{props.favorites.includes(props.drink.idDrink) ? '❤' : '🤍'}</button>
                </div>
                <div>
                    <p>Instructions:</p>
                    <p>{props.drink.strInstructions}</p>
                </div>
            </div>
        </div>
    );
}

export default DrinkDetailCard;