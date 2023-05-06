import React from "react";
import { useState } from "react";

const TodoHeader = ({toogleState, changeTerm}) => {
    let [inpValue, setInpValue] = useState('')
    let [ btnState, setBtnState ] = useState({
        btnOne: false,
        btnTwo: false,
        btnThree: false
    })

    const FnAll = () => {
        toogleState('all')
        setBtnState( {
            btnOne: true,
            btnTwo: false,
            btnThree: false
        } )
    }
    const FnActive = () => {
        toogleState('active')
        setBtnState( {
            btnOne: false,
            btnTwo: true,
            btnThree: false
        } )
    }
    const FnDone = () => {
        toogleState('done')
        setBtnState( {
            btnOne: false,
            btnTwo: false,
            btnThree: true
        } )
    }

    return (
        <div>
            <input type="text" onChange={ (e) => {
                setInpValue(e.target.value)
                changeTerm(e.target.value)
            } } value={inpValue}/>
            <button disabled={ btnState.btnOne } onClick={ FnAll }>Все</button>
            <button disabled={ btnState.btnTwo } onClick={ FnActive }>Активные</button>
            <button disabled={ btnState.btnThree } onClick={ FnDone }>Выполненные</button>
        </div>
    )
}

export default TodoHeader;