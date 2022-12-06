import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";

const DogDetail = ({ dogs }) => {
    const { name } = useParams();

    const dog = dogs.find(dog => dog.name === name);

// check for wrong manual url input
    if (!dog) {
        alert("No dogs found with this name!")
        return <Redirect to="/dogs" />
    }
    return (
        <div className="row mt-4">
            <img src={dog.src} alt={name} />
            <h2>Name is {name}</h2>
            <h3>He is {dog.age} years old</h3>
            <ul>
                {dog.facts.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    )
};

export default DogDetail;