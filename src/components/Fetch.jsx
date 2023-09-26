import { useState } from "react";

function Fetch() {
    const [data, setData] = useState(null);

    const getFetch = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err))
            .finally(() => console.log('Termino el fetch'));
    };

    return <div>
        <button onClick={getFetch}>Llamar a la base de datos</button>
    </div>;
}

export default Fetch;
