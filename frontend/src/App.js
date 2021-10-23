// import './App.css';
import LoginPage from './components/Login/LoginPage';
import HomePage from './components/Homepage/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Homepage from './components/Homepage/HomePage';
import Profile from "./components/Profile"
import ApplicantPage from './components/Applicant/ApplicantPage';
import Donor from './components/Donor/AllPlans'

function App() {

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage}>
          <HomePage />
        </Route>
        <Route path="/profile" component={Profile}>
          <Profile />
        </Route>
        <Route path="/applicant" component={ApplicantPage}>
          <ApplicantPage />
        </Route>
        <Route path="/donor" component={Donor}>
          <Donor />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;