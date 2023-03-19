import './Characters.css'
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Characters({data}) {
    const [name, setName] = useState("Nobody");
    const [species, setSpecies] = useState("Human");
    const [imgUrl, setUrl] = useState('')
    
    const navigate = useNavigate();

    useEffect(() => {
        setName(data.name);
        setSpecies(data.species);
        setUrl(data.image)
    }, [data.name, data.species, data.image])

    const navigateOnClick = () => {
        navigate(`/${data.id}`)
    }

    return (
        <div className="characters" onClick={navigateOnClick}>
            <div className="image-block">
                <img src={imgUrl} alt={name}></img>
            </div>
            <div className="data-block">
                <p>{name}</p>
                <p>{species}</p>
            </div>
        </div>
    )
}

export default memo(Characters);