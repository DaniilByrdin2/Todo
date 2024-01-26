import React from "react";
import './todo-list-item.css'
// @ts-expect-error TS(2307): Cannot find module '../../Img/Delete.png' or its c... Remove this comment to see the full error message
import Delete from  '../../Img/Delete.png'
// @ts-expect-error TS(2307): Cannot find module '../../Img/Warning.png' or its ... Remove this comment to see the full error message
import Warning from '../../Img/Warning.png'

const ListItem = ({
    deletePost,
    item,
    toogleTodoItem
}: any) => {
    const {text, status, id} = item

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <li className="list-group-item">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span className= { `${status ? 'active' : 'done'  } todos` } >{text}</span>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <button className="btn btn-outline-secondary" onClick={() => toogleTodoItem(id)}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={Warning}/>
                </button>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <button className="btn btn-danger btn-outline-secondary" onClick={() => deletePost(id)}>
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <img src={Delete} />
                </button>
            </div>
        </li>
    )
}
export default ListItem;