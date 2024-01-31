import React from "react";
import { useState } from "react";

import styles from './todo-list-footer.module.css'

import {TogleType} from "../../../App"

interface TodoFooterProps {
    "AddPost": (p: string, p2: TogleType | null) => void
}

const TodoFooter = ({ AddPost }: TodoFooterProps) => {
    let [text, setText] = useState('')

    let onChangeText = (e: any) => {
        setText(e.target.value)
    }
    let addText = () => {
        AddPost(text, null)
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