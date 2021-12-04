import "./App.css";
import { Login } from "./Login.js";
import { Signup } from "./Signup.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
