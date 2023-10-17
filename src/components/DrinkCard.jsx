import { useState } from 'react';
import { Link } from 'react-router-dom';

function DrinkCard(props) {
    const [favorite, setFavorite] = useState(false);

    const handleFavorite = () => {
        const updatedFavorites = props.favorites.includes(props.drink.idDrink)
            ? props.favorites.filter((id) => id !== props.drink.idDrink)
            : [...props.favorites, props.drink.idDrink];

        props.setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        // Verifica si el trago debe ser eliminado de la lista de favoritos
        // if (props.favorites.includes(props.drink.idDrink)) {
        //     props.removeFavorite(props.drink.idDrink);
        // }

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
                    <button className="btn btn-primary"><Link to={`/detail/${props.drink.idDrink}`}>View</Link></button>
                    <button onClick={handleFavorite} className="btn btn-primary">{props.favorites.includes(props.drink.idDrink) ? '❤' : '🤍'}</button>
                </div>
            </div>
        </div>
    );
}

export default DrinkCard;
