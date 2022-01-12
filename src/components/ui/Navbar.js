import React from 'react'

const Navbar = () => {
    return (
        <nav className="teal lighten-2">
            <div className="nav-wrapper container">
                <a href="#!" className="brand-logo">Contact-app</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="badges.html"><i className="material-icons right">add</i>Add contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar