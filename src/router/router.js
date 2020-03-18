import React, { Suspense, lazy } from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

import MioLoading from "../pages/MioLoding";

const Home = lazy(() => import("../pages/home/home"));
const Page1 = lazy(() => import("../pages/page1/page1"));
const Nfpage = lazy(() => import("../pages/notfoundpage/nfpage"));


const Routes = () => (
  // BrowserRouter
  <BrowserRouter>
    <Suspense fallback={MioLoading}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/page1' component={Page1} />
        <Route component={Nfpage} />
      </Switch>
    </Suspense>
  </BrowserRouter>
  // HashRouter
  // <HashRouter>
  //   <Route exact path="/" component={Home} />
  //   <Route path="/page1" component={Page1} />
  // </HashRouter>
);
export default Routes;
