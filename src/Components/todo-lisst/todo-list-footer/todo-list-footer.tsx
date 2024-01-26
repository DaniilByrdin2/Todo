import React from "react";
import { useState } from "react";
import styles from './todo-list-footer.module.css'

const TodoFooter = ({AddPost}) => {
    let [text, setText] = useState('')

    let onChangeText = (e) => {
        setText(e.target.value)
    }
    let addText = () => {
        AddPost(text)
        setText('')
    }

    return (
        <div className={styles.containerFooter}>
            <form className={styles.form}>
                <input
                    className={styles.footerInput}
                    type="text"
                    onChange={onChangeText}
                    value={text}
                />
                <button type="submit" className="btn btn-outline-secondary" onClick= { (e) => {
                    addText()
                    e.preventDefault() } } >Add Todos</button>
            </form>
        </div>
    )
}

export default TodoFooter;