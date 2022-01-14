import { useState, useEffect } from 'react'
import ContactList from './components/contacts/ContactList'
import Navbar from './components/ui/Navbar'

const App = () => {
  const [contacts, setContacts] = useState([
    {id:1 , name:'Shedrach', number:'08039646573', email:'shedrach686@gmail.com'},
    {id:2 , name:'Lukaku', number:'08039646573', email:'Luks@gmail.com'},
    {id:3 , name:'Hazard', number:'08039646573', email:'Hazard@gmail.com'}
  ])

  const handleDelete = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  }

  useEffect(() => {
    console.log('use Effect ran')
  })

    return (
      <div className="App">
       <Navbar />
       <ContactList contacts={contacts} handleDelete={handleDelete}/>
       <div className="container hide-on-large-only">
       <a className="waves-effect waves-light btn"><i className="material-icons right">person_add</i>Add Contact</a>
       </div>
      </div>
    );
}

export default App;
