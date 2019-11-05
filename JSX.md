# JSX

## 什么是JSX

- Facebook起草的JS扩展语法。
- 本质是一个JS对象，会被babel编译，最终会被转化为React.createElment
- 每个JSX表达式，有且仅有一个根节点
  - React.Fragment
- 每个JSX元素必须结束（XML规范）
  
## 在JSX中嵌入表达式

- 将表达式作为内容的一部分
  - null和undefined不会显示
- 将表达式作为元素属性
- 属性使用小驼峰命名法
- 防止注入攻击
  - 自动编码
  - dangerouslySetInnerHTML


## 元素的不可变性
