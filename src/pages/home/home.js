import React, { Component, Suspense, lazy } from "react";
import { Link, NavLink, Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import gxr from "../MyLove/gxr";
import "./home.less";
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
const Page1 = lazy(() => import("../page1/page1"));
const Page2 = lazy(() => import("../page2"));
export default class Home extends Component {
  state = {};
  render() {
    return (
      <Layout className='home'>
        <Header className='header'>
          <div className='logo' />
          <Menu mode='horizontal' defaultSelectedKeys='1'>
            <Menu.Item key='1'>
              <NavLink to='/'>首页</NavLink>
            </Menu.Item>
            <Menu.Item key='2'>
              <NavLink to='/page1'>page1</NavLink>
            </Menu.Item>
            <Menu.Item key='3'>
              <NavLink to='/page2'>page2</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Suspense fallback='1加载中...'>
            <Route path='/page1' component={Page1} />
          </Suspense>
          <Suspense fallback='2加载中...'>
            <Route path='/page2' component={Page2} />
          </Suspense>
        </Content>
        <Footer className='footer'>这个天下说是你害西楚亡国,我曹长卿不答应！</Footer>
      </Layout>
    );
  }
}
