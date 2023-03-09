import './Characters.css'
import { useEffect, useState } from 'react';

function Characters({data}) {
    const [name, setName] = useState("Nobody");
    const [species, setSpecies] = useState("Human");
    const [imgUrl, setUrl] = useState('')
    
    useEffect(() => {
        setName(data.name);
        setSpecies(data.species);
        setUrl(data.image)
    }, [])

    return (
        <div className="characters">
            <div className="image-block">
                <img src={imgUrl}></img>
            </div>
            <div className="data-block">
                <a>{name}</a>
                <a>{species}</a>
            </div>
        </div>
    )
}

export default Characters;