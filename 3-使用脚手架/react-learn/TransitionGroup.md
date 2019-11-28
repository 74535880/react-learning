# TransitionGroup

> 用于列表统一的动画实现。

该组件的 children，接受多个 Transition 或者 CSSTransition，该组件用于根据这些子组件的 key 值，控制他们的进入和退出状态。
存在key值，就进入状态，没有就exit状态
**yarn add uuid** 这个库用于生成一个唯一的 id
引入：**`import uuid from 'uuid'`**
使用：uuid(),调用就会生成全球的唯一 id，字符串

```css
.exit {
  transform-origin: left top;
}
/* 说明上面的会导致回流，重新计算元素的尺寸和位置，如果写在一起，变换还是会依照原来的位置进行变换。 */
.exit-active {
  transition: 2s;
  transform: scale(0);
}

/*1. 点击删除：添加exit类名，
  2. 然后立马又添加exit-active类名
  3. 一段时间后，移除dom */
```

````js
      <div>
      <TransitionGroup component="ul" className="abc">
        {tasks.map(t => (
          <CSSTransition key={t.id} timeout={2000}>
            <div>
              {t.name}
              <button
                onClick={() => {
                  setTasks(tasks.filter(it => it.id !== t.id));
                }}
              >
                删除
              </button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button
        onClick={() => {
          setTasks([...tasks, { id: uuid(), name: `任务` }]);
        }}
      >
        添加一个任务
      </button>
    </div>
```
````
