# store

是用于保存数据的。

通过 createStore 方法创建的对象。

该对象的属性：

- dispatch:分发一个 action
- getState：得到仓库中当前的状态
- replaceReducer：替换当前的 reducer
- subscribe:注册一个监听器。是一个无参函数，当分发一个 action 之后，会运行注册的监听器。可以注册多个监听器。可以在这个函数里面打印日志。`store.subscribe(() => { console.log(`状态改变了`);});`。无论状态有没有改变，只要分发都会执行。
  - 该函数的返回值是一个函数，用于取消监听。
- Symbol(observable):是一个私有的成员，是一个方法，是一个内部方法。
