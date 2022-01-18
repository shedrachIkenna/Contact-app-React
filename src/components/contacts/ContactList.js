import user from '../../images/user.png'
import { NavLink } from 'react-router-dom'
const ContactList = ({contacts, handleDelete}) => {
    return (
        <div className="contactList">
            {
                contacts.length ? (
                    contacts.map((contact) => (
                    <div className="contact-preview container"  key={contact.id}>
                        <ul className="collection">
                        <li className="collection-item avatar">
                            <img src={user} alt="user" className="circle"/>
                            <span className="title">{contact.name}</span>
                            <p>{contact.number}<br/>
                                {contact.email}
                            </p>
                            <NavLink to="/" className="secondary-content" onClick={() => handleDelete(contact.id)}><i className="material-icons">delete</i></NavLink>
                        </li>
                        </ul>
                    </div>
                ))
                ) : (
                    <div className="container">
                        <p className="flow-text center">You have no contacts!</p>
                    </div>
                )
            }
        </div>
    )
}

export default ContactList 