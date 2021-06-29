import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Destination from "./Components/Destination/Destination";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import Booking from "./Components/Booking/Booking";

export const UserContext = createContext([]);

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/druta-riders" exact>
            <Header />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/destination" exact>
            <Destination />
          </Route>

          <Route path="/blog" exact>
            <Blog />
          </Route>

          <Route path="/contact" exact>
            <Contact />
          </Route>

          <PrivateRoute path="/profile" exact>
            <Profile />
          </PrivateRoute>

          <PrivateRoute path="/booking" exact>
            <Booking />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
