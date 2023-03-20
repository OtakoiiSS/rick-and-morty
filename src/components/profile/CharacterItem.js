import './CharacterItem.css'

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Service from "../../services/get-service";

function CharactersItem() {
    const [data, setData] = useState();
    
    let params = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        Service.getCharacter(`/${params.userId}`)
            .then(res => setData(res.data));
    }, [params.userId]);

    
    if (data) {
        
        const {name, gender, status, species, origin, type, image} = data;

        return(
            <div className='item'>
                <div className='button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <button onClick={() => {navigate('/')}}>Go back</button>
                </div>
                <div className='image'>
                    <img src={image} alt={name}/>
                    <h1>{name}</h1>
                    <h2>Information</h2>
                </div>
                <div className='info'>
                    <ul>
                        <li>
                            <div className='gender'>
                                <p>Gender</p>
                                <p>{gender}</p>
                            </div>
                        </li>
                        <li>
                            <div className='status'>
                                <p>Status</p>
                                <p>{status}</p>
                            </div>
                        </li>
                        <li>
                            <div className='species'>
                                <p>Species</p>
                                <p>{species}</p>
                            </div>
                        </li>
                        <li>
                            <div className='origin'>
                                <p>Origin</p>
                                <p>{origin.name}</p>
                            </div>
                        </li>
                        <li>
                            <div className='type'>
                                <p>Type</p>
                                <p>{type === "" ? "unknown" : type}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default CharactersItem;