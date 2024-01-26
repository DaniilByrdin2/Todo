import React from "react";
import { useState } from "react";
// @ts-expect-error TS(2307): Cannot find module './todo-list-header.module.css'... Remove this comment to see the full error message
import styles from './todo-list-header.module.css'

const TodoHeader = ({
    toogleState,
    changeTerm
}: any) => {
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
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={styles.todoListHeader}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <input className={styles.inputHeader} type="text" onChange={ (e) => {
                setInpValue(e.target.value)
                changeTerm(e.target.value)
            } } value={inpValue}/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <button className= { btnState.btnOne ? 'btn-info btn' : 'btn-outline-secondary btn' } disabled={ btnState.btnOne } onClick={ FnAll }>All</button>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <button className={ btnState.btnTwo ? 'btn-info btn' : 'btn-outline-secondary btn' } disabled={ btnState.btnTwo } onClick={ FnActive }>Active</button>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <button className={ btnState.btnThree ? 'btn-info btn' : 'btn-outline-secondary btn' } disabled={ btnState.btnThree } onClick={ FnDone }>Done</button>
        </div>
    )
}

export default TodoHeader;