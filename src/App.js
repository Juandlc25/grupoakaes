import Avianca from "./components/Avianca";
import Home from "./components/Home";
import Vivair from "./components/Vivair";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/vivair" component={Vivair} />
        <Route exact path="/avianca" component={Avianca} />
      </Switch>
    </Router>
  );
}

export default App;
