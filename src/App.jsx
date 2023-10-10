import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Services from './screens/Services';
import Detail from './screens/Detail';
import NotFound404 from './screens/NotFound404';
import Navbar from './componentes/Navbar';

function App() {
    return (
        <BrowserRouter>
        
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/detalle/:id" element={<Detail />} />
                <Route path="*" element={<NotFound404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
