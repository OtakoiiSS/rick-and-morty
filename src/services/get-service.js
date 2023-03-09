import axios from 'axios';

export default class Service {
    static getAllCharacter = () => {
        return (
            axios.get('https://rickandmortyapi.com/api/character')
        )
    }
}