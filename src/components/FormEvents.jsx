import { useRef, useState } from 'react';

// function FormEvents() {
//     const nameInputRef = useRef(null);
//     const [user, setUser] = useState(null);
//     const [messageError, setMessageError] = useState(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const name = nameInputRef.current.value;
//         if (name === '') {
//             setMessageError('Ingrese su nombre y apellido por favor');
//         } else if (!name.includes(' ')) {
//             setMessageError('Ingrese su nombre completo por favor');
//         } else {
//             setUser(name);
//             setMessageError(null);
//             nameInputRef.current.value = ''
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <h2>Ingrese su nombre y apellido</h2>
//                 <input ref={nameInputRef} type="text" placeholder="Nombre y apellido" />
//                 <button type="submit">Enviar</button>
//             </form>
//             {messageError && <h3 className="text-red-500">{messageError}</h3>}
//             {user && <h3>{`Bienvenido/a ${user}`}</h3>}
//         </div>
//     );
// }

const data = [
    { name: 'Miguel', id: 1 },
    { name: 'Florencia', id: 2 },
    { name: 'Juan', id: 3 },
    { name: 'Federico', id: 4 },
    { name: 'Nicolas', id: 5 },
    { name: 'Juana', id: 6 },
    { name: 'Julio', id: 7 },
    { name: 'Melisa', id: 8 },
    { name: 'Mariana', id: 9 },
];

function FormEvents() {
    const [users, setUsers] = useState(data);
    const [filteredUsers, setFilteredUsers] = useState(data)

    const handleFilter = (e) => {
        const value = e.target.value;
        const filteredData = users.filter((user)=> user.name.toLowerCase().includes(value.toLowerCase()))
        setFilteredUsers(filteredData)
    }

    return (
        <div>
            <form>
                <h2>Filtrar usuarios</h2>
                <input onChange={event=> handleFilter(event)} type="text" placeholder="Ingrese un usuario" />
                <button type="submit">Enviar</button>
            </form>
            <section className='mt-10'>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user)=> <p key={user.id}>{user.name}</p>)
                ) : null}
            </section>
        </div>
    );
}

export default FormEvents;
