function Fetch() {
    async function getData() {
        try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
            const data = await response.json()
            console.log(data)
        } catch(err) {
            console.error(err);
        } finally {
            console.log('Esto se ejecuta en el final');
        }
    }

    getData()

    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err))
        .finally(console.log('Termino el fetch'))

    return <div>Fetch</div>;
}

export default Fetch;
