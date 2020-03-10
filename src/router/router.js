import React from "react";

import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import Home from "../pages/home/home";
import Page1 from "../pages/page1/page1";
import Nfpage from "../pages/notfoundpage/nfpage";

const Routes = () => (
  // 单页面、动态路由
  //   <BrowserRouter>
  //     <div>
  //       <ul>
  //         <li>
  //           <Link to="/">首页</Link>
  //         </li>
  //         <li>
  //           <Link to="/page1">Page1</Link>
  //         </li>
  //         <li>
  //           <Link to="/what">what</Link>
  //         </li>
  //       </ul>
  //       <Switch>
  //         <Route exact path="/" component={Home} />
  //         <Route path="/page1" component={Page1} />
  //         <Route component={Nfpage} />
  //       </Switch>
  //     </div>
  //   </BrowserRouter>
  // BrowserRouter
  //   <BrowserRouter>
  //     <Switch>
  //       <Route exact path="/" component={Home} />
  //       <Route path="/page1" component={Page1} />
  //       <Route component={Nfpage} />
  //     </Switch>
  //   </BrowserRouter>
  // 静态路由
  <HashRouter>
    <Route exact path="/" component={Home} />
    <Route path="/page1" component={Page1} />
  </HashRouter>
);
export default Routes;
