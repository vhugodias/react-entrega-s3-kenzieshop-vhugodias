import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/carrinho">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
