import { useEffect, useState } from "react";

function Events() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        let screenWidth = window.innerWidth;
        setScreenWidth(screenWidth);
    };

    const handleClick = () => {
        alert('Haz hecho click');
    };

    const handleFocus = () => {
        console.log('Haz hecho focus');
    };

    return (
        <div className="bg-red-200 h-[500px] flex justify-center items-center gap-4 flex-col mt-10">
            <input type="text" onFocus={handleFocus} />
            <button onClick={handleClick} className="border border-gray-700 rounded-md px-4 py-2">
                Botón
            </button>
            <h3>Ancho de pantalla: {screenWidth}</h3>
        </div>
    );
}
export default Events;
