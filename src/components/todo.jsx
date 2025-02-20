import React from "react";
import { useState } from "react";
import "./todo.css";
import TodoImg from '../assets/main_bg.png'
function Todo() {
  const [value, getvalue] = useState("");
  const [add, setadd] = useState([]);
  const TaskAdded = () => {
    if (value.trim()) {
      setadd([...add, value]);
      getvalue("");
    }
  };
  const remove = (index) => {
    let l = [...add]
    l.splice(index, 1)
    setadd(l);
  };

  const change = (e) => {
    getvalue(e.target.value);
  };
  return (
    <div class="main-container">
      <div class="container">
        <div class="header-01">
          <div class="logo">
            <h1 id="name">
              My <span>TodoApp</span>
            </h1>
          </div>
          <div class="bars" id="bars">
            <i class="fas fa-bars"></i>
          </div>
          <div class="end" id="end">
            <div class="negative-bars" id="deactive">
              <i class="fa-solid fa-xmark"></i>
            </div>        
          </div>
        </div>
        <div class="header-02">
          <div class="part-01-header-02">
            <img src={TodoImg} alt="" />
          </div>
          <div class="part-02-header-02">
            <div id="impo">
              <div class="input-section">
                <input
                  type="text"
                  id="text_input"
                  placeholder="Enter your Task"
                  value={value}
                  onChange={change}
                  autoComplete="off"
                />
              </div>
              <button id="added_button" onClick={TaskAdded}>
                Add your task
              </button>
            </div>
            <div class="added_button-section">
              <div class="time_selection_part">
                <h2>Your Daily task Routine is important for you</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="part-03" id="part-03">
          <h4>TaskList</h4>
          <div class="task_list" id="task_list">
            {add.map((val, i) => (
              <>
                <div class="task" id="task">
                  <div id="task_name" class="task_name">
                    {val}
                  </div>
                  <div class="task_buttons">
                    <button id="remove_task" onClick={()=> remove(i)}>
                      Remove Task
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todo;
