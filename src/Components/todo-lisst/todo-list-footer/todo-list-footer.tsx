import React from "react";
import { useState } from "react";

import { ColorButtonsAdd } from "../../UI_Components/Btn/Btn-Warning-Delete-Add.tsx"
import { MultilineTextFields } from "../../UI_Components/Input/Input.tsx"

import styles from './todo-list-footer.module.css'

import {TogleType} from "../../../App"

interface TodoFooterProps {
    "AddPost": (p: string, p2: TogleType | null) => void
}

const TodoFooter = ({ AddPost }: TodoFooterProps) => {
    let [text, setText] = useState('')

    let onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    let addText = () => {
        AddPost(text, null)
        setText('')
    }

    return (
        <div className={styles.containerFooter}>
            <form className={styles.form}>
                <MultilineTextFields onChangeText = {onChangeText} value = { text } />
                <ColorButtonsAdd addText = { addText }  />
            </form>
        </div>
    )
}

export default TodoFooter;