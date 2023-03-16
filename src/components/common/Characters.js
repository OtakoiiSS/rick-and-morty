import './Characters.css'
import { useEffect, useState } from 'react';
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
    }, [])

    const navigateOnClick = () => {
        navigate(`/${data.id}`)
    }

    return (
        <div className="characters" onClick={navigateOnClick}>
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