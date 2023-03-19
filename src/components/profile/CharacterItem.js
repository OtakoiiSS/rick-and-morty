import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Service from "../../services/get-service";

function CharactersItem() {
    const [data, setData] = useState({
        name: "ERROR 404",
        gender: "Unknown",
        status: "Unknown",
        species: "Unknown", 
        origin: "Unknown",
        type: "Unknown",
        image: "Unknown"
    })
    
    let params = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        Service.getCharacter(`/${params.userId}`)
            .then(res => setData(res.data))
    }, [params.userId])

    const {name, gender, status, species, origin, type, image} = data;

    return(
        <div>
            <button onClick={() => {navigate('/')}}>Go back</button>
            <div>
                <img src={image} alt={name}/>
                <h1>{name}</h1>
            </div>
            <div>
                <h2>Information</h2>
                <ul>
                    <li>
                        <div>
                            <p>Gender</p>
                            <p>{gender}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Status</p>
                            <p>{status}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Species</p>
                            <p>{species}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Origin</p>
                            <p>{origin.name}</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>Type</p>
                            <p>{type === "" ? "Unknown" : type}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CharactersItem;