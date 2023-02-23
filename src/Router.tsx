import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ toggleDark, isDark }: IRouterProps) {
  const root = "/REACT_M";

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
