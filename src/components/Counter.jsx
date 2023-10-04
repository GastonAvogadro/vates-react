import { useEffect, useState } from "react";

function Counter(props) {
    const [counter, setCounter] = useState(0)
    useEffect(()=> {
        console.log('Montaje o actualización del componente');

        return () => {
            console.log('Desmontaje del componente');
        }
        
    }, []) // Array de dependencias

    const handleCounter = () => {
        setCounter(counter + 1)
    };
    
    return (
        <>
            <h3 className="text-[2rem]">Contador</h3>
            <p className="text-[2rem]">{counter}</p>
            <button className="text-[2rem] border border-black w-[50px]" onClick={handleCounter}>
                +
            </button>
        </>
    );
}
export default Counter;
