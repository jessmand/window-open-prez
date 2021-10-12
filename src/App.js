import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NewTab from "./NewTab";
import ActI from "./acts/ActI";
import ActII from "./acts/ActII";
import BlankPage from "./BlankPage";
import ActIII from "./acts/ActIII";
import ActIV from "./acts/ActIV";
import ActV from "./acts/ActV";

const Routes = {
  "/new-tab": {
    Component: NewTab,
    title: "A generic new tab",
  },
  "/blank-page": {
    Component: BlankPage,
    title: "Cause I've got a blank page bAaAby...",
  },
  "/act-i": {
    Component: ActI,
    title: "Act I: The Standard",
    next: "/act-ii",
    prev: "/act-0",
  },
  "/act-ii": {
    Component: ActII,
    title: "Act II: The Typo",
    next: "/act-iii",
    prev: "/act-i",
  },
  "/act-iii": {
    Component: ActIII,
    title: "Act III: The Experiment",
    next: "/act-iv",
    prev: "/act-ii",
  },
  "/act-iv": {
    Component: ActIV,
    title: "Act IV: The Limitations",
    next: "/act-v",
    prev: "/act-iii",
  },
  "/act-v": {
    Component: ActV,
    title: "Act V: The Application",
    prev: "/act-iv",
  },
  "/": {
    Component: Home,
    title: "So you think you know window.open",
  },
};

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Switch>
            {Object.keys(Routes).map((routeName) => {
              const RouteComponent = Routes[routeName].Component;
              return (
                <Route path={routeName} key={routeName}>
                  {Routes[routeName].prev && (
                    <Link
                      style={{ position: "absolute", left: 30, top: 30 }}
                      className="App-link"
                      to={Routes[routeName].prev}
                    >
                      &lt;-- Prev Act
                    </Link>
                  )}
                  <h1 className="App-page-title">{Routes[routeName].title}</h1>
                  {Routes[routeName].next && (
                    <Link
                      style={{ position: "absolute", right: 30, top: 30 }}
                      className="App-link"
                      to={Routes[routeName].next}
                    >
                      Next Act --&gt;
                    </Link>
                  )}
                  <div className="App-content">
                    <RouteComponent />
                  </div>
                </Route>
              );
            })}
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
