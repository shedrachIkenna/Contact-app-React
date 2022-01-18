
const initState = {
  contacts : [
    {id:1 , name:'Shedrach', number:'08039646573', email:'shedrach686@gmail.com'},
    {id:2 , name:'Ikenna', number:'08039646573', email:'iks@gmail.com'},
    {id:3 , name:'John', number:'08039646573', email:'John@gmail.com'}
  ]
}

const rootReducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'DELETE_CONTACT'){
      let newContacts = state.contacts.filter((contact) => {
        return action.id !== contact.id
      })
      return {
        ...state,
        contacts: newContacts
      }
    }else 
    if(action.type === 'ADD_CONTACT') {
      return {
        contacts: [...state.contacts, action.payload]
      }
    }
    return state;

}

export default rootReducer;