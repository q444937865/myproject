import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Input } from "antd";
import gxr from "../MyLove/gxr";
import "./home.less";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default class Home extends Component {
  state = {};
  render() {
    return (
      <Layout className='home'>
        <Header className='header'>
          <div className='logo' />
          <Menu mode='horizontal' defaultSelectedKeys='1'>
            <Menu.Item key='1'>首页</Menu.Item>
            <Menu.Item key='2'>nav 2</Menu.Item>
            <Menu.Item key='3'>nav 3</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    );
  }
}
