import React from "react";
import { Link } from "react-router-dom";

const Dogs = ({ dogs }) => {
    const links = dogs.map(dog => (
        <div key={dog.name} className="col-3">
                <img src={dog.src} alt={dog.name} />
                <h4>
                <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                </h4>
            </div>
    ))
    return (
        <div className="Dogs">
            <h2>Missing Dogs</h2>
            <div className="row">
                { links }
            </div>
        </div>
    )
}
export default Dogs;