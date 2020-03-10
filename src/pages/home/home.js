import React, { Component } from "react";
import { Link } from "react-router-dom";
import Example from "../page2";
import gxr from "../useful/gxr";
import "./home.less";
export default class Home extends Component {
  state = {
    tip: ".",
    tipIndex: 0,
    storyRow: 0
  };
  componentWillMount() {
    console.log(gxr.sum(0.1, 0.2));
    let { tipIndex } = this.state;
    this.tipChange = setInterval(() => {
      tipIndex = tipIndex == 3 ? 0 : tipIndex + 1;
      this.setState({
        tipIndex,
        tip: ".".repeat(tipIndex)
      });
    }, 400);
    setTimeout(() => {
      this.storyChange = setInterval(
        () => this.setState({ storyRow: this.state.storyRow + 1 }),
        2000
      );
    }, 5000);
    // setTimeout(() => this.props.history.push("page1"), 10000);
  }
  componentWillUnmount() {
    this.tipChange && clearInterval(this.tipChange);
    this.storyChange && clearInterval(this.storyChange);
  }
  render() {
    let { tip, storyRow } = this.state;
    return (
      <div className="home">
        <div className="tip">
          拼命加载中
          <span className="dot">{tip}</span>
        </div>
        <div className="story">
          <div
            className="storyMove"
            style={{ transform: `translateY(-${40 * storyRow}px)` }}
          >
            <p>面对歹徒手中的水果刀</p>
            <p>王警官从容不迫掏出了水果</p>
            <p></p>
            <p>面对歹徒的挑衅</p>
            <p>经验丰富的王警官忍无可忍</p>
            <p>再也抑制不住内心的怒火</p>
            <p>无法冷静</p>
            <p>头脑一热</p>
            <p>发起了高烧</p>
            <p></p>
            <p>“大师，帮我算一卦。”</p>
            <p>“你会死的很难看。”</p>
            <p>“怎么破？”</p>
            <p>“先整容再死。”</p>
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}
