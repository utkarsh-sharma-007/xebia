import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login/Login'
import Products from './Products/Products'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <div className="App">
        <div id="custom-loader" className={'loader'} style={{display: "none"}}>
          <div className={'lds-ring'}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Login/>
              </Route>
              <Route path="/products">
                <Products/>
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
