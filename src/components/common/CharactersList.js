import Characters from "./Characters";
import { v4 as uuid } from 'uuid'
import { useEffect, useState } from "react";

function CharactersList({data}) {
    const [charactersList, setCharactersList] = useState(data)
    const [inputValue, setInputValue] = useState('');

    const filterArray = (input) => {
        return data.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()))
    }

    useEffect(() => {
        setInputValue(localStorage.getItem('CHARACTERS_INPUT'))
    }, [])

    useEffect(() => {
        setCharactersList(filterArray(inputValue));

        console.log(inputValue)
    }, [inputValue])
    
    const handleInputChange = (event) => {
        localStorage.setItem('CHARACTERS_INPUT', event.target.value)
        
        setInputValue(localStorage.getItem('CHARACTERS_INPUT'));
    };
    // const filtered = sortedArr.filter(el => (
    //     el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1))

    return (
        <div className="list">
            <div>
                <img />
                <label>Search</label>
                <input value={inputValue} onChange={handleInputChange}></input>
            </div>
            <div>
            <ul>
                {charactersList.map(data => (
                    <li key={uuid()}>
                        <Characters data={data} />
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default CharactersList;