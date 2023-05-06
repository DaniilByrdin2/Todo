import React from "react";
import { useState } from "react";

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
        <div>
            <input 
                type="text" 
                onChange={onChangeText}
                value={text}
            />
            <button onClick={addText}>Добавить задачу</button>
        </div>
    )
}

export default TodoFooter;