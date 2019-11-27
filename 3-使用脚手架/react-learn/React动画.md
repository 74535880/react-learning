# React 动画(一)

React 动画库（react 第三方动画库，react 社区里面发生的）：**react-transition-group**

1. 下载：**`yarn add react-transition-group`**
2. 使用：**`import { Transition } from "react-transition-group";`**

Transition 是一个组件，里面有两个属性:

1. in: 值为 true 或者 false。用于判断 Transition 组件的状态。true 状态为 entered，false 为 exited。entered->exiting->exited,由 exited->entering->entered。状态变化的原因，就是 in 属性的布尔值，为真或者假。当从一个状态变为另一个状态的过程中，这个组件会渲染 3 次,首先是本身状态的渲染，然后是变化状态的渲染，最后是变化完成后的渲染。那个 Transition 组件的 children 函数就会执行三次
2. timeout：值为一个数字，表示从一个 entered->exited 或者 exited->entered 所花费的时间。
   1. `timeout={{appear: 500,enter: 300,exit: 500, }}`,可以单独设置每个状态的时间。appear defaults to the value of enter
3. mountOnEnter(defual:false):值设置为 true 的时候，当 状态为 entered 的时候，第一次会渲染组件，跟正常的一样，但是如果第一次为 false 的时候，不会渲染这个组件，会等到状态改变才会渲染，也就是从 exited->entering->entered 状态,这个时候，就会渲染，再次状态回去为 exited，还是会执行那个函数。渲染。
4. unmountOnExit：当状态为 exited 的时候，组件卸载。其余状态，会渲染在页面。
   1. 我们可以通过上面这个属性，实现，首次状态为 exited 的全部卸载。
5. appear (default:false):属性设置为 true 的时候，第一次能渲染到页面的时候，会经过从 exited->entering->entered,这会让第一次出现在页面就会有自动有动画状态，而不需要改变函数组件的状态来改变 in 的状态（从 exited->entering->entered 或者 entered->exiting->exited）。false 只有一个状态，exited 或者 entered。
6. enter (default:true):是否启用进入状态
7. exit （default：true）:是否启用结束状态
8. addEndListener：一个函数，`addEndListener={(node, done) => { // use the css transitionend event to mark the finish of a transition node.addEventListener('transitionend', done, false); }}`
   1. done 是一个函数，执行会立即变为完成的状态。
9. ...后面还有一些钩子函数（就是不同状态前后所触发的函数。）可以查阅官网。
    > `https://reactcommunity.org/react-transition-group/transition#Transition-prop-onEntering`

**注意:这个组件，使用的话，最好是通过改变状态的状态来改变不同的渲染，因为这样才会重新渲染。**

```js
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

<Transition in={inProp} timeout={duration}>
  {state => {
    return <div style={{
        transitionStyles[state]
    }}>这是一个div</div>;
  }}
</Transition>;
```
