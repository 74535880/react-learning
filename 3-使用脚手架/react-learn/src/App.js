import React, { useState } from "react";
import uuid from "uuid";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      name: "任务1"
    },
    {
      id: uuid(),
      name: "任务2"
    }
  ]);

  return (
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
  );
};

export default App;
