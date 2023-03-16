import Characters from "./Characters";
import { v4 as uuid } from 'uuid'

function CharactersList({data}) {
    const copy = [...data].sort((a, b) => a.name.localeCompare(b.name))

    console.log(copy)

    return (
        <div className="list">
            {copy.map(data => (
                <Characters data={data} key={uuid()} />
            ))}
        </div>
    )
}

export default CharactersList;