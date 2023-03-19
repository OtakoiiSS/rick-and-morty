import axios from 'axios';

export default class Service {
    static getCharacter = (id = "") => {
        
        return (
            axios.get(`https://rickandmortyapi.com/api/character${id}`)
        )
    }

    static getAllCharacter = async () => {
        const arr = []

        for (let i = 0; i <= 42; i++) {
            await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`)
                .then(res => arr.push(...res.data.results))
        }

        return arr
    }
}