import React from "react";
import './todo-list-item.css'

const ListItem = ({deletePost, item, toogleTodoItem}) => {
    const {text, status, id} = item

    return (
        <div>
            <span className={status ? 'active' : 'done' }>{text}</span>
            <button onClick={ () => deletePost(id) }>Удалить</button>
            <button onClick={ () => toogleTodoItem(id) }>Выделить</button>
        </div>
    )
}
export default ListItem;