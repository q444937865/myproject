import React, { Suspense, lazy } from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

import MioLoading from "../pages/MioLoding";

// import Home from "../pages/home/home";
const Home = lazy(() => import("../pages/home/home"));
const Page1 = lazy(() => import("../pages/page1/page1"));
const Nfpage = lazy(() => import("../pages/notfoundpage/nfpage"));

const Routes = () => (
  // BrowserRouter  // 刷新404请在webpackconfig的devServer中加入 historyApiFallback: true
  <BrowserRouter>
    <Suspense fallback={<MioLoading />}>
      <Switch>
        <Route path='/' component={Home} />
        {/* <Route path='/page1' component={Page1} /> */}
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
