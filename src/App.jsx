import ToggleTheme from './components/ToggleTheme';
import Counter from './components/Counter';
import InputFocus from './components/InputFocus';
import './App.css';

function App() {

    return (
        <div className="flex justify-center items-center gap-4 flex-col mt-10">

            {/* Contador usando el hook useState */}
            <Counter />

            {/* Botón de claro/oscuro usando el hook useState */}
            <ToggleTheme />

            {/* Input con focus usando el hook useRef */}
            <InputFocus />
        </div>
    );
}

export default App;
