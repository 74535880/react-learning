# 使用 Redux 管理数据

时刻记住：Redux 跟 React 一点关系没有。首先安装 **`yarn add redux`**

一般情况下，我们会先写 reducer。也就是对数据的改变。redux 就是建立一个仓库。

reducer 本质上就是一个函数。

参数：

- state：之前仓库的状态
- action：描述要做什么的对象。

返回值：一个新的状态。

基本的示例：

```js
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
```

### redux 只是建立一个数据仓库

引入：**`import {createStore} from 'redux'`**

redux 里面存的有 reducer 的引用。

createStore:是一个函数

参数：

- reducer
- 数据默认值。

示例：

```js
// 1. 创建store
window.store = createStore(reducer, 10); //reducer是我们首先写好的。
// 2. 创建一个action
const action = {
  type: "increase"
};
console.log(window.store.getState()); //可以获取当前的状态。10
// 3. 分发action,会把reducer的返回值作为store的新状态。
// 这里有点疑问：为什么分发的action会找到我们想要的那个reducer
window.store.dispatch(action);
console.log(window.store.getState()); //可以获取当前的状态。11
```
