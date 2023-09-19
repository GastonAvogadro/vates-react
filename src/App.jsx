import {useState} from 'react'
import ToggleTheme from './components/ToggleTheme';
import Counter from './components/Counter';
import InputFocus from './components/InputFocus';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0)

    return (
        <div className="flex justify-center items-center gap-4 flex-col mt-10">
            
            {/* Contador usando el hook useState */}
            {counter >= 5 ? null : <Counter counter={counter} setCounter={setCounter}/>}

            {/* Botón de claro/oscuro usando el hook useState */}
            {/* <ToggleTheme /> */}

            {/* Input con focus usando el hook useRef */}
            {/* <InputFocus /> */}
        </div>
    );
}

export default App;
