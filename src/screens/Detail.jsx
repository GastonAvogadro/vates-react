import { useParams } from 'react-router-dom'

function Detail () {
    const { id } = useParams()

    console.log(id);

    return (
        <div>{id}</div>
    )
}

export default Detail