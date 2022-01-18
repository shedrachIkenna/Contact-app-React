import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="teal lighten-2">
            <div className="nav-wrapper container">
                <NavLink to="/" className="brand-logo">Contact-App</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/add"><i className="material-icons right">person_add</i>Add contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar