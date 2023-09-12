import './App.css';
import Button from './components/Button';
import Formulario from './components/Formulario';

function App() {
    return (
        <div className="flex justify-center items-center gap-4 flex-col mt-10">
            {/* Llamamos al mismo componente Button y le pasamos props diferentes */}
            <Button name={'Iniciar sesión'} color={'bg-red-100'} />
            <Button name={'Registrarse'} color={'bg-blue-100'} />
            <Button name={'Recuperar contraseña'} color={'bg-green-100'} />

            {/* Llamamos al componente y le pasamos dentro componentes children */}
            <Formulario>
                <h3>Formulario</h3>
                <p>Esto es un formulario</p>
                <Button name={'Enviar'} />
            </Formulario>
        </div>
    );
}

export default App;
