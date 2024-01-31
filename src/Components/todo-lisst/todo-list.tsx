import React from "react";

import ListItem from "../todo-list-item/todo-list-item.tsx";
import TodoFooter from "./todo-list-footer/todo-list-footer.tsx";
import TodoHeader from "./todo-list-header/todo-list-header.tsx";

import { TogleType } from "../../App.tsx"
import { InitState } from "../../App.tsx";
import { Task } from "../../App.tsx"


interface TodoListProps {
  "term": string,
  "changeTerm": (p: string) => void,
  "typeToogle": TogleType,
  "state": InitState,
  "toogleState": (p: TogleType) => void,
  "toogleTodoItem": (p: number) => void,
  "deletePost": (p: number) => void,
  "AddPost": (p: string, p2: TogleType ) => void
}



const TodoList = ({
  state,
  typeToogle,
  term,
  AddPost,
  deletePost,
  toogleTodoItem,
  toogleState,
  changeTerm,
}: TodoListProps) => {

  const selectState = (tg = typeToogle, t = term): Task[] => {
    const myState = [...state.data];
    if (t.length !== 0) {
      return myState.filter((el) => {
        return el.text.indexOf(t) > -1;
      });
    }
    if (tg === "done") {
      return myState.filter((el) => {
        return el.status === false;
      });
    } else if (tg === "active") {
      return myState.filter((el) => {
        return el.status === true;
      });
    }
    return myState;
  };

  const fnRenderList = (st: Task[]) => {
    return st.map((el: Task) => {
      return (
        <ListItem
          toogleTodoItem={toogleTodoItem}
          deletePost={deletePost}
          key={el.id}
          item={el}
        />
      );
    });
  };

  return (
    <div>
      <div>
        <TodoHeader changeTerm={changeTerm} toogleState={toogleState} />
      </div>
      <ul className="list-group ">{fnRenderList(selectState())}</ul>
      <div>
        <TodoFooter AddPost={AddPost} />
      </div>
    </div>
  );
};
export default TodoList;
