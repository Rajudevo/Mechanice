import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Home/Footer/Footer';
import ContactUs from './Pages/Home/ContactUs/ContactUs';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/contactus">
          <ContactUs></ContactUs>
        </Route>
        
        <PrivateRoute path="/booking/:serviceId">
          <Booking></Booking>
        </PrivateRoute>
        <Route path="*">
        <NotFound></NotFound>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
