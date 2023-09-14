import { useRef } from "react";

function InputFocus() {
    const inputElement = useRef(null)

    return (
        <>
            <input ref={inputElement} className="border border-gray-800 px-4 py-2" type="text" placeholder="ingresar" />
            <button
                className="border border-gray-800 px-4 py-2"
                onClick={() => {
                    inputElement.current.focus();
                }}
            >
                Ir al input
            </button>
        </>
    );
}
export default InputFocus;
