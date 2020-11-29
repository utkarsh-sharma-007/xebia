import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <div className="App">
        <header>
          <div className="header container">
            <div className="logo">sCart</div>
          </div>
        </header>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Login/>
              </Route>
              <Route path="/products">
                <div>Products</div>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <ToastContainer />
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = {
  
}

export default App;
