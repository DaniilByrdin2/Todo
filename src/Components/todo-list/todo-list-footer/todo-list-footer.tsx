import React from "react";
import { useState } from "react";

import { ColorButtonsAdd } from "../../UI_Components/Btn/Btn-Warning-Delete-Add.tsx"
import { MultilineTextFields } from "../../UI_Components/Input/Input.tsx"

import styles from './todo-list-footer.module.css'

import {TogleType} from "../../../App"

interface TodoFooterProps {
    "AddPost": (p: string, p2: TogleType | null) => void,
}



const TodoFooter = ({ AddPost }: TodoFooterProps) => {
    let [text, setText] = useState('')
    const [ footerError, setFooterError ] = useState<boolean>(false)

    let onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {        
        setText(e.target.value)
    }
    let addText = () => {

        if(!text) {
          setFooterError(true)
        } else {
          setFooterError(false)
          AddPost(text, null)
          setText('')
        }

    }
    
    return (
      <div className={styles.containerFooter}>
        <div className={styles.form}>
          {
            footerError ? 
            <MultilineTextFields type = "footerError" onChangeText={onChangeText} value={text} />
            : 
            <MultilineTextFields type = "footer" onChangeText={onChangeText} value={text} />
          }
          <div className={styles.footerBtnAddContainer}>
            <ColorButtonsAdd addText={addText} />
          </div>
        </div>
      </div>
    );
}

export default TodoFooter;