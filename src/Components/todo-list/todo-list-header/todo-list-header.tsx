import React from "react";
import { useState } from "react";

import {ColorToggleButton} from "../../UI_Components/ToogleBtn/ToogleBtn.tsx"
import SearchIcon from '@mui/icons-material/Search';
import {MultilineTextFields} from "../../UI_Components/Input/Input.tsx"

import styles from './todo-list-header.module.css'

import {TogleType} from "../../../App"


interface TodoHeaderProps {
    "changeTerm": (p: string) => void,
    "toogleState": (p: TogleType) => void
} 

type btnStateType = {
    btnOne: boolean,
    btnTwo: boolean,
    btnThree: boolean
}

const TodoHeader = ({ toogleState, changeTerm }: TodoHeaderProps) => {
    const [inpValue, setInpValue] = useState<string>('')
    const [ btnState, setBtnState ] = useState<btnStateType>({
        btnOne: false,
        btnTwo: false,
        btnThree: false
    })

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInpValue(e.target.value);
      changeTerm(e.target.value);
    };


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

    const FnObj = {
        "FnAll": FnAll,
        "FnActive": FnActive,
        "FnDone": FnDone
    }

    return (
      <div className={styles.todoListHeader}>
        <div className={styles.inputContainer}>
          <MultilineTextFields type = "header" onChangeText={onChangeText} value={inpValue} />
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
        </div>
        <ColorToggleButton FnObj={FnObj} btnState={btnState} />
      </div>
    );
}

export default TodoHeader;