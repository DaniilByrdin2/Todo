import React from "react";
import ListItem from '../todo-list-item/todo-list-item'
import TodoFooter from './todo-list-footer/todo-list-footer'
import TodoHeader from './todo-list-header/todo-list-header'

const TodoList = ({state, AddPost, deletePost, toogleTodoItem, toogleState, typeToogle, changeTerm, term }) => {
    
    const selectState = (tg = typeToogle , t = term) => {
        let myState = [ ...state.date ]
        if (t.length !== 0) {
            return myState.filter(el => {return el.text.indexOf(t) > -1 })
        }
        if(tg === 'done') {
            return myState.filter( el => { return el.status === false } )
        } else if (tg === 'active') {
            return myState.filter( el => { return el.status === true } )
        } 
        return myState
    }

    const fnRenderList = (st) => {
            return st.map(el => {
                return <ListItem
                    toogleTodoItem={toogleTodoItem}
                    deletePost={deletePost}
                    key={el.id}
                    item={el}
                />
            })
    }


    return (
        <div>
            <div>
                <TodoHeader changeTerm={changeTerm} toogleState = {toogleState} />
            </div>
            <div> 
                { fnRenderList(selectState()) }
            </div>
            <div>
                <TodoFooter  AddPost={AddPost} />
            </div>
        </div>
    )
}
export default TodoList;