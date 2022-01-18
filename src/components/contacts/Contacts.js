import React, { Component } from 'react'
import ContactList from './ContactList'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Contacts extends Component {
    render() {
    
    const { contacts } = this.props
      const handleDelete = (id) => {
        this.props.deleteContact(id)
      }
    
        return (
            <div className="contacts">
                <ContactList contacts={contacts} handleDelete={handleDelete}/>
                <div className="container hide-on-large-only">
                    <NavLink to="/add" className="waves-effect waves-light btn"><i className="material-icons right">person_add</i>Add Contact</NavLink>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts : state.contacts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact : (id) => { dispatch({ type: 'DELETE_CONTACT', id: id}) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts)