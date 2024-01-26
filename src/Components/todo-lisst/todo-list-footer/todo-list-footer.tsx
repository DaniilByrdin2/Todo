import React from "react";
import { useState } from "react";
// @ts-expect-error TS(2307): Cannot find module './todo-list-footer.module.css'... Remove this comment to see the full error message
import styles from './todo-list-footer.module.css'

const TodoFooter = ({
    AddPost
}: any) => {
    let [text, setText] = useState('')

    let onChangeText = (e: any) => {
        setText(e.target.value)
    }
    let addText = () => {
        AddPost(text)
        setText('')
    }

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={styles.containerFooter}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <form className={styles.form}>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <input
                    className={styles.footerInput}
                    type="text"
                    onChange={onChangeText}
                    value={text}
                />
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <button type="submit" className="btn btn-outline-secondary" onClick= { (e) => {
                    addText()
                    e.preventDefault() } } >Add Todos</button>
            </form>
        </div>
    )
}

export default TodoFooter;