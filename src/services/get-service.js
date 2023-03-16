import axios from 'axios';

export default class Service {
    static getCharacter = (id = "") => {
        
        return (
            axios.get(`https://rickandmortyapi.com/api/character${id}`)
        )
    }
}