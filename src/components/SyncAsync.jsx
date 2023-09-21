function SyncAsync() {
    // Sincronía bloqueante de la aplicación
    console.log('Inicio');

    function dos() {
        console.log('Dos');
    }

    function uno() {
        console.log('Uno');
        dos()
    }

    uno()

    console.log('Fin');

    //Asincronía no bloqueante de la aplicación

    console.log('Inicio');

    function dos() {
        setTimeout(() => {
            console.log('Dos');
        }, 2000);
    }

    function uno() {
        setTimeout(() => {
            console.log('Uno');
        }, 4000);
        dos();
    }

    uno();

    console.log('Fin');

    return <div>SyncAsync</div>;
}

export default SyncAsync;
