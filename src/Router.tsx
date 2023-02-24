import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

const root = "/REACT_M";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${root}/nomadcoin/:coinId`}>
          <Coin isDark={isDark} />
        </Route>
        <Route path={`${root}/nomadcoin`}>
          <Coins toggleDark={toggleDark} isDark={isDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
