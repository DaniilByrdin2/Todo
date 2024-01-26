import React from "react";
// @ts-expect-error TS(6142): Module '../todo-list-item/todo-list-item' was reso... Remove this comment to see the full error message
import ListItem from '../todo-list-item/todo-list-item.tsx'
// @ts-expect-error TS(6142): Module './todo-list-footer/todo-list-footer' was r... Remove this comment to see the full error message
import TodoFooter from './todo-list-footer/todo-list-footer.tsx'
// @ts-expect-error TS(6142): Module './todo-list-header/todo-list-header' was r... Remove this comment to see the full error message
import TodoHeader from './todo-list-header/todo-list-header.tsx'


const TodoList = ({
    state,
    AddPost,
    deletePost,
    toogleTodoItem,
    toogleState,
    typeToogle,
    changeTerm,
    term
}: any) => {
    
    const selectState = (tg = typeToogle , t = term) => {
        const myState = [ ...state.date ]
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

    const fnRenderList = (st: any) => {
            return st.map((el: any) => {
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                return <ListItem
                    toogleTodoItem={toogleTodoItem}
                    deletePost={deletePost}
                    key={el.id}
                    item={el}
                />
            });
    }


    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            <div>
                <TodoHeader changeTerm={changeTerm} toogleState = {toogleState} />
            </div>
            <ul className="list-group "> 
                { fnRenderList(selectState()) }
            </ul>
            <div >
                <TodoFooter  AddPost={AddPost} />
            </div>
        </div>
    )
}
export default TodoList;