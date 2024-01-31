import React from "react";
import Delete from  '../../Img/Delete.png'
import Warning from '../../Img/Warning.png'

import './todo-list-item.css'

import {Task} from "../../App"


interface ListItemProps {
    "toogleTodoItem": (p: number) => void,
    "deletePost": (p: number) => void,
    "key": number,
    "item": Task
}

const ListItem = ({ item, deletePost, toogleTodoItem}: ListItemProps) => {
    const {text, status, id} = item

    return (
        <li className="list-group-item">
            <span className= { `${status ? 'active' : 'done'  } todos` } >{text}</span>
            <div>
                <button className="btn btn-outline-secondary" onClick={() => toogleTodoItem(id)}>
                    <img src={ Warning } alt="Warning"/>
                </button>
                <button className="btn btn-danger btn-outline-secondary" onClick={() => deletePost(id)}>
                    <img src={ Delete } alt="Delete"/>
                </button>
            </div>
        </li>
    )
}
export default ListItem;