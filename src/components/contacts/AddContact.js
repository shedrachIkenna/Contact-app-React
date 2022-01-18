import { connect } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddContact = (props) => {
const [name, setName] = useState('')
const [number, setNumber] = useState('')
const [email, setEmail] = useState('')
const [id, setId] = useState(Math.random())
const history = useHistory()

const handleSubmit = (e) => {
  e.preventDefault();
  setId(Math.random());
  const contact = {id, name, number, email }
  console.log(contact)
  props.addContact(contact)
  history.push('/')
}

  return(
    <div className="container addContact">
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Number: </label>
        <input type="text"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <label>Email: </label>
        <input type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn waves-effect waves-light addButton">Add Contact</button>
      </form>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
  return {
      addContact : (contact) => { dispatch ({ type: 'ADD_CONTACT', payload: contact}) }
  }
}


export default connect(null, mapDispatchToProps)(AddContact);
