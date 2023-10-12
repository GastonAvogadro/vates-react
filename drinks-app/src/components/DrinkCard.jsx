import { useState } from 'react';
import { Link } from 'react-router-dom';

function DrinkCard(props) {
    const [favorite, setFavorite] = useState(false);

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={props.drink.strDrinkThumb} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.drink.strDrink}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/detail/${props.drink.idDrink}`}>View</Link></button>
                    <button onClick={()=> setFavorite(!favorite)} className="btn btn-primary">{favorite ? '❤' : '🤍'}</button>
                </div>
            </div>
        </div>
    );
}

export default DrinkCard;
