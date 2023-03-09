import Characters from "./Characters";

function CharactersList({data}) {
    const copy = [...data].sort((a, b) => a.name.localeCompare(b.name))

    console.log(copy)

    return (
        <div className="list">
            {copy.map(data => (
                <Characters data={data} key={data.id}/>
            ))}
        </div>
    )
}

export default CharactersList;