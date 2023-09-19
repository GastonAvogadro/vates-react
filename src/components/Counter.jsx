import { useEffect } from "react";

function Counter(props) {

    useEffect(()=> {
        console.log('Montaje o actualización del componente');

        return () => {
            console.log('Desmontaje del componente');
        }
        
    }, []) // Array de dependencias

    const handleCounter = () => {
        props.setCounter(props.counter + 1)
    };
    
    return (
        <>
            <h3 className="text-[2rem]">Contador</h3>
            <p className="text-[2rem]">{props.counter}</p>
            <button className="text-[2rem] border border-black w-[50px]" onClick={handleCounter}>
                +
            </button>
        </>
    );
}
export default Counter;
