function Filter({inputValue, setInputValue }) {
    const handleFilter = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
    };

    return (
        <form onSubmit={(e) => e.preventDefault()} className="my-10 text-center">
            <input onChange={handleFilter} value={inputValue} type="text" placeholder="Filter by name" className="input input-bordered w-[400px]"/>
        </form>
    );
}
export default Filter;
