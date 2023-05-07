import React from "react";
import './todo-list-item.css'
import Delete from  '../../Img/Delete.png'
import Warning from '../../Img/Warning.png'

const ListItem = ({deletePost, item, toogleTodoItem}) => {
    const {text, status, id} = item

    return (
        <li className="list-group-item">
            <span className= { `${status ? 'active' : 'done'  } todos` } >{text}</span>
            <div>
                <button className="btn btn-outline-secondary" onClick={() => toogleTodoItem(id)}>
                    <img src={Warning}/>
                </button>
                <button className="btn btn-danger btn-outline-secondary" onClick={() => deletePost(id)}>
                    <img src={Delete} />
                </button>
            </div>
        </li>
    )
}
export default ListItem;