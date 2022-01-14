import user from '../../images/user.png'
const ContactList = ({contacts, handleDelete}) => {
    return (
        <div className="contactList">
            {
                contacts.map((contact) => (
                    <div className="contact-preview container"  key={contact.id}>
                        <ul className="collection">
                        <li className="collection-item avatar">
                            <img src={user} alt="user" className="circle"/>
                            <span className="title">{contact.name}</span>
                            <p>{contact.number}<br/>
                                {contact.email}
                            </p>
                            <a href="#" className="secondary-content" onClick={() => handleDelete(contact.id)}><i className="material-icons">delete</i></a>
                        </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactList 