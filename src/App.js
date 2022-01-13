import { useState } from 'react'
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
    return (
      <div className="App">
       <Navbar />
       <ContactList contacts={contacts} handleDelete={handleDelete}/>
      </div>
    );
}

export default App;
