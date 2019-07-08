//这是redux的原始state
const tiger = 10000
const name = '张三'

//这是action
const increase = {
    type:'涨工资'
}
const decrease = {
    type:'扣工资'
}
//这是reducer
const reducer = (state = tiger, action) => {
  return state += action.num?action.num:0;
  // switch (action.type){
  //   case '涨工资': 
  //     return state += 100;
  //   case '扣工资': 
  //     return state -= 100;
  //   default: 
  //     return state;
  // }
}

export default reducer