
import './App.css';
import Header from './components/header';
import RegistrationForm from'./components/registartionForm';
import WalletForm from './components/wallet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <h1>
          <Link to="/wallet">wallet</Link>
        </h1>
        <Header/>
        {/* <RegistrationForm/> */}
        <Routes>
          <Route path="/wallet">
            <WalletForm/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
