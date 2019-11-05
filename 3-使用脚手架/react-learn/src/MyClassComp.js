import React from "react";

export default class MyClassComp extends React.Component {
  
    //该方法，必须返回react元素
  render() {
    return <h1>类组件内容:数字：{this.props.number}</h1>;
  }
}
