import {useEffect, useState} from 'react';
import axios from 'axios';

const Swapitest = () => {

    const [people, setPeople] = useState([]);

    const getPeople = async () => {
        try{
            let response = await axios('https://swapi.dev/api/people/');
            setPeople(response.data.results);
        } catch(err){
            console.log(err);
        }
    }

    useEffect(() =>{
        getPeople();
    },[]);


    return (
        <>
            <h1>Swapi test</h1>
            {
                people.length ?
                people.map(person => <h2 key={person.created}>{person.name}</h2>) :
                <p>Cargando personajes...</p>
            }
        </>
    )
}

export default Swapitest;