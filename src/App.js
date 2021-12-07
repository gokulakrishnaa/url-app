import "./App.css";
import { Login } from "./Login.js";
import { Signup } from "./Signup.js";
import { Home } from "./Home.js";
import { Error } from "./Error.js";
import { Switch, Route } from "react-router-dom";
import { Forgotpassword } from "./Forgotpassword";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/forgotpassword">
          <Forgotpassword />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
