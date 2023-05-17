import React, { useState }from "react";
import styles from "./List.module.css"
import { FaTimes } from "react-icons/fa"

function List(props) {
    const [isClick, setIsClick]= useState(true);

    function handleComplete(){
        props.completion(props.index, isClick);
        setIsClick(!isClick);
    }

    function handelClick() {
        props.deleteItem(props.index);
    }

    return (
            <div className={styles.wrapper}>
            <div className={!props.check ? styles.list : styles.strike}>
            {props.item}
            </div>
                <div className={styles.container}>
                <button onClick={handleComplete} className={styles.complete}>{!props.check ? 'Complete' : 'Completed'}</button>
                <FaTimes className={styles.button} onClick={handelClick}  />
                </div>
            </div>
        
    )
}

export default List;