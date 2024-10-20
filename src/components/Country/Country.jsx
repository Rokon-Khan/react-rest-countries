
import { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited)
    }
    
    return (
        <div className={`country ${visited? 'visited': 'non-visited'}`}>
            <h3>Country Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <h4><small>{cca3}</small></h4>
            <button onClick={handleVisited}>{visited? 'Visited': 'Going'}</button>
            {visited? 'I have Visited this Country' : 'I want to Visit'}
        </div>
    );
};

export default Country;