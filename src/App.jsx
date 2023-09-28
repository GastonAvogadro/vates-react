import { useEffect, useState } from 'react';
import './App.css';
import UseEffectFetch from './components/UseEffectFetch';
import Events from './components/Events';

function App() {
    
    return (
        <div className="bg-red-200 h-[500px] flex justify-center items-center gap-4 flex-col mt-10">
           <Events />
        </div>
    );
}

export default App;
