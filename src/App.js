import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import InboxList from "./components/InboxList";
import SpamList from "./components/SpamList";
import "./App.css";

const Home = () => (
  <div className="home">
    <h2>Welcome to Email Service Point</h2>
    <p>Select from above links to go through your mails</p>
  </div>
);

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <ul className="avbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/inbox">
              Inbox
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/spam">
              Spam
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/inbox">
          <InboxList />
        </Route>
        <Route path="/spam">
          <SpamList />
        </Route>
      </Switch>
    </div>
  );
}
