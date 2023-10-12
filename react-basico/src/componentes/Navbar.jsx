import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav>
                <ul className="flex justify-center gap-10 mb-20">
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/servicios">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/detalle">Detalle</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar
