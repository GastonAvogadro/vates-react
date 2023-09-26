import './App.css';
import Fetch from './components/Fetch';
import UseEffectFetch from './components/UseEffectFetch';

function App() {
    return (
        <div className="flex justify-center items-center gap-4 flex-col mt-10">
            {true ? <UseEffectFetch /> : null}
        </div>
    );
}

export default App;
