import { useState } from 'react';
import moon from '../assets/moon.svg';
import sun from '../assets/sun.svg';

function ToggleTheme() {
    const [isDark, setIsDark] = useState(false);

    const handleBgClass = () => {
        return `${
            isDark ? 'bg-slate-900' : 'bg-gray-100'
        } w-[80vw] h-[500px] flex flex-col justify-center items-center gap-6`;
    };

    return (
        <div className={handleBgClass()}>
            <img className="w-[40px]" src={isDark ? sun : moon} alt="" />
            <button
                className={`border ${isDark ? 'border-white text-white' : 'border-black text-black'} w-[100px]`}
                onClick={() => setIsDark(!isDark)}
            >
                Cambiar tema
            </button>
        </div>
    );
}

export default ToggleTheme;
