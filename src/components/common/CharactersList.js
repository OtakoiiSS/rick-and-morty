import './CharactersList.css';

import Characters from "./Characters";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

function CharactersList({data}) {
    const [charactersList, setCharactersList] = useState(data);
    const [inputValue, setInputValue] = useState('');

    const filterArray = (input) => {
            return data.filter((item) => item.name.toLowerCase().includes(input.toLowerCase()));
    }

    useEffect(() => {
        if(localStorage.getItem('CHARACTERS_INPUT') !== null) {
            setInputValue(localStorage.getItem('CHARACTERS_INPUT'));
        } else {
            setInputValue('')
        }
    }, []);

    useEffect(() => {
        setCharactersList(filterArray(inputValue));
    }, [inputValue]);
    
    const handleInputChange = (event) => {
        localStorage.setItem('CHARACTERS_INPUT', event.target.value);
        setInputValue(localStorage.getItem('CHARACTERS_INPUT'));
    };

    return (
        <div className="list">
            <div className='header'>
                <img src="https://upload.wikimedia.org/wikipedia/ru/c/c8/Rick_and_Morty_logo.png" alt='Logo'/>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <input name='search' placeholder='Filter by name...' value={inputValue} onChange={handleInputChange}></input>
                    </div>
                </div>
            <div className='list-items'>
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