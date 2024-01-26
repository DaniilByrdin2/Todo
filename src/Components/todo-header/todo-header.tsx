import React from "react"
import styles from "./todo-header.module.css"
import { useEffect, useState } from "react";


const Header = ({getInfo, state}) => {
    const [info, setInfo] = useState('')

    useEffect( () => {
        setInfo(getInfo() )
    }, [state] )
    
    let {done, more} = info;

    return (
        <div className={styles.container}>
            <div className={styles.contaonerItem}>Todo List</div>
            <div>
                <span>More:{more} </span>
                <span>Done:{done}</span>
            </div>
        </div>
    )
}
export default Header;