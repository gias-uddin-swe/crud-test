import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import DeleteUser from "./components/DeleteUser/DeleteUser";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/update/:id">
            <UpdateUser></UpdateUser>
          </Route>
          <Route exact path="/delete">
            <DeleteUser></DeleteUser>
          </Route>
          <Route exact path="/addUser">
            <AddUser></AddUser>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
