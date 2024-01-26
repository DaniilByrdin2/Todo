import React from "react";
import { useState } from "react";
import styles from './todo-list-header.module.css'

const TodoHeader = ({toogleState, changeTerm}) => {
    const [inpValue, setInpValue] = useState('')
    const [ btnState, setBtnState ] = useState({
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
        <div className={styles.todoListHeader}>
            <input className={styles.inputHeader} type="text" onChange={ (e) => {
                setInpValue(e.target.value)
                changeTerm(e.target.value)
            } } value={inpValue}/>
            <button className= { btnState.btnOne ? 'btn-info btn' : 'btn-outline-secondary btn' } disabled={ btnState.btnOne } onClick={ FnAll }>All</button>
            <button className={ btnState.btnTwo ? 'btn-info btn' : 'btn-outline-secondary btn' } disabled={ btnState.btnTwo } onClick={ FnActive }>Active</button>
            <button className={ btnState.btnThree ? 'btn-info btn' : 'btn-outline-secondary btn' } disabled={ btnState.btnThree } onClick={ FnDone }>Done</button>
        </div>
    )
}

export default TodoHeader;