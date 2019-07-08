import React, { Component } from 'react';
import { connect } from 'react-redux';

class page1 extends Component {

  componentDidMount() {
    console.log(this.props)
  }
  jian=()=>{
    const { PayIncrease, PayDecrease } = this.props;
    PayDecrease( this.refs.money.value || 0 )
  }
  render() {
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <div className="page1">
        <h2>当月工资为{this.props.tiger}</h2>
        <h2>名字为{this.props.name}</h2>
        加钱：<input ref="money"/>元
        <button onClick={PayIncrease}>升职加薪</button>
        <button onClick={this.jian}>迟到罚款</button>
      </div>
    );
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: (n) => dispatch({ type:'涨工资',num: n }),
    PayDecrease: (n) => dispatch({ type:'扣工资',num: n })
  }
}

export default page1 = connect(mapStateToProps, mapDispatchToProps)(page1)