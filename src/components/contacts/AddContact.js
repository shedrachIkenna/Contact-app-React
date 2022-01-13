const AddContact = () => {
    return (
        <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">account_circle</i>
              <input id="icon_prefix" type="text" className="validate"/>
              <label for="icon_prefix">Name</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">Phone</i>
              <input id="icon_telephone" type="tel" className="validate"/>
              <label for="icon_telephone">Telephone</label>
            </div>
          </div>
        </form>
      </div>
            
    )
}

export default AddContact