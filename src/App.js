
import Contact from './components/contacts/Contacts'
import Navbar from './components/ui/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContact from './components/contacts/AddContact';

const App = () => {

    return (
      <Router>
        <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Contact />
          </Route>
          <Route path="/add">
            <AddContact />
          </Route>
        </Switch>
        </div>
      </Router>
    );
}

export default App;
