import React, { Component } from "react";
import { Link } from "react-router-dom";
import Example from "../page2";
import gxr from "../MyLove/gxr";
import "./home.less";
export default class Home extends Component {
  state = {};
  componentWillMount() {
    console.log(gxr.sum(0.1, 0.2));
  }
  render() {
    return <div className='home'>首页</div>;
  }
}
