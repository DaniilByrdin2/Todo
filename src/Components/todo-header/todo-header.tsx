import React from "react"
// @ts-expect-error TS(2307): Cannot find module './todo-header.module.css' or i... Remove this comment to see the full error message
import styles from "./todo-header.module.css"
import { useEffect, useState } from "react";


const Header = ({
    getInfo,
    state
}: any) => {
    const [info, setInfo] = useState('')

    useEffect( () => {
        setInfo(getInfo() )
    }, [state] )
    
    // @ts-expect-error TS(2339): Property 'done' does not exist on type 'String'.
    let {done, more} = info;

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={styles.container}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div className={styles.contaonerItem}>Todo List</div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span>More:{more} </span>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <span>Done:{done}</span>
            </div>
        </div>
    )
}
export default Header;