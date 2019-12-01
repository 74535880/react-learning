import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";
// import Link from "./Link";

function PageA(props) {
  return <h1>A页</h1>;
}
function PageB(props) {
  return <h1>B页</h1>;
}
function NavBar() {
  return (
    <div>
      <p>
        <NavLink
          strict
          activeStyle={{
            background: "#ccc"
          }}
          activeClassName="selected"
          to="/a"
        >
          去a页
        </NavLink>
      </p>
      <p>
        <NavLink
          className="这个b"
          style={{ fontSize: 20 }}
          replace
          innerRef={node => {
            console.log(node);
          }}
          to={{
            pathname: "/b",
            hash: "#abc",
            search: "?a=a&b=2",
            state: "这是一个附加信息"
          }}
        >
          去b页
        </NavLink>
      </p>
      <p>
        <NavLink
          activeStyle={{
            background: "#ccc"
          }}
          to="/abc"
        >
          其他页
        </NavLink>
      </p>
    </div>
  );
}
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/a" component={PageA} />
        <Route path="/b" component={PageB} />
        <Redirect from="/a/:id" push to="/a/:id" />
      </Switch>
    </Router>
  );
};

export default App;
