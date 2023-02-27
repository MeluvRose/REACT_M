import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/REACT_M/:coinId"}>
          <Coin />
        </Route>
        <Route path={"/REACT_M"}>
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
