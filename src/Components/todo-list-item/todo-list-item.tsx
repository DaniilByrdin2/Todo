import React from "react";

import { ColorButtonsWarning, ColorButtonsDelete} from "../UI_Components/Btn/Btn-Warning-Delete-Add.tsx"

import './todo-list-item.css'

import {Task} from "../../App"


interface ListItemProps {
    "toogleTodoItem": (p: number) => void,
    "deletePost": (p: number) => void,
    "item": Task,
}

const ListItem = ({ keyyyy, item, deletePost, toogleTodoItem}: ListItemProps) => {
    const {text, status, id} = item

    return (
        <div className="mmm">
        {/* <RowAndColumnSpacing /> */}
        <li className="list-group-item">
            <span className= { `${status ? 'active' : 'done'  } todos` } >{text}</span>
            <div>
                <ColorButtonsWarning id = {id} toogleTodoItem = {toogleTodoItem} />
                <ColorButtonsDelete id = {id} deletePost = {deletePost} />
            </div>
        </li>
        </div>
    )
}
export default ListItem;