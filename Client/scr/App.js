import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllPhones from './pages/AllPhones';
import DetailsPhone from './pages/DetailsPhone';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AllPhones} />
                <Route exact path="/phones/:phoneId" component={DetailsPhone} />
            </Switch>
        </Router>
    );
}
export default App;