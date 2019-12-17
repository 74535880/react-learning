import { createStore } from "redux";

// 假设仓库中仅存放了一个数字，该数字的变化可能是加1或者减1。
// 约定action的格式：{type:"操作类型",payload:附加数据}
/**
 *
 * @param {*} state 之前仓库中的状态（数据）
 * @param {*} action 描述要做什么的对象
 */
function reducer(state, action) {
  // 返回一个状态
  if (action.type === "increase") {
    return state + 1;
  } else if (action.type === "decrease") {
    return state - 1;
  } else {
    return state; //如果action.type是无效的，数据不变。
  }
}
// 1. 创建store
window.store = createStore(reducer, 10);
// 2. 创建一个action
const action = {
  type: "increase"
};
console.log(window.store.getState()); //可以获取当前的状态。10
// 3. 分发action,会把reducer的返回值作为store的新状态。
window.store.dispatch(action);
console.log(window.store.getState()); //可以获取当前的状态。11
