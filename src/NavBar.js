import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ dogs }) => {
    const links = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name}`}>
            {dog.name}
        </NavLink>
    ));
    return (
        <nav className="NavBar">
            <NavLink exact to="/dogs">Home</NavLink>
            {links}
        </nav>
    );
}
export default NavBar;