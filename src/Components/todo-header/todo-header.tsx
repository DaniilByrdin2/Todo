import React from "react"
import { useEffect, useState } from "react";

import styles from "./todo-header.module.css"

import { InitState } from '../../App'
import { getInfoType } from '../../App'


interface HeaderProps {
    "state": InitState,
    "getInfo": () => getInfoType
}


const Header = ( { getInfo, state}: HeaderProps ) => {
    const [info, setInfo] = useState<getInfoType | null>( null )

    useEffect( () => {
        setInfo( getInfo() )
    }, [ state, getInfo ] )

    return (
        <div className={styles.container}>
            <div className={styles.contaonerItem}>Todo List 2.0</div>
            <div>
                {info ? <div><span>More:{info.more} </span><span>Done:{info.done}</span></div>: null}
            </div>
        </div>
    )
}
export default Header;