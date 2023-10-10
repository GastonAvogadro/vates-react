import { Link } from "react-router-dom";

function Home() {
    const productos = [
        {
            name: 'Remera',
            price: 20000,
        },
        {
            name: 'Pantalón',
            price: 40000,
        },
        {
            name: 'Gorra',
            price: 10000,
        },
    ];

    return (
        <div>
            <ul>
                {productos.map((producto) => (
                    <li>
                        <Link to={`/detalle/${producto.name}`}>{producto.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
