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

        // FUNCIÓN QUE SE UTILIZA SÓLO EN LA SCREEN FAVORITES PARA REMOVER EL TRAGO
        if (props.removeFavorite && props.favorites.includes(props.drink.idDrink)) {
            props.removeFavorite(props.drink.idDrink);
        }

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
                    <Link to={`/detail/${props.drink.idDrink}`}>
                        <button className="btn btn-primary">View</button>
                    </Link>
                    <button onClick={handleFavorite} className="btn btn-primary">
                        {props.favorites.includes(props.drink.idDrink) ? '❤' : '🤍'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DrinkCard;
