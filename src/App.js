import "./App.css";
import { Login } from "./Login.js";
import { Signup } from "./Signup.js";
import { Authenticate } from "./Authenticate.js";
import { Home } from "./Home.js";
import { Error } from "./Error.js";
import { Switch, Route } from "react-router-dom";
import { Forgotpassword } from "./Forgotpassword";
import { Resetpassword } from "./Resetpassword";
import { ActivateUser } from "./ActivateUser";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/authenticate">
          <Authenticate />
        </Route>
        <Route path="/activateuser">
          <ActivateUser />
        </Route>
        <Route path="/forgotpassword">
          <Forgotpassword />
        </Route>
        <Route exact path="/resetpassword/:id/:token">
          <Resetpassword />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/error">
          <Error />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
