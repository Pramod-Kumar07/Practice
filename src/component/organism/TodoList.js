import React, { useState } from "react";
import Heading from "../atoms/Heading";
import styles from "./TodoList.module.css";
import List from "../atoms/List";
import InputTask from "../molecules/InputTask";

function TodoList() {
    const [list, setList] = useState([{
        task:'Add tasks',
        isComplete:false
    }]);
    // const [pendingTask, setPendingTask] = useState('');

    function addList(inputTask){
        if(inputTask !==''){
            setList([...list, {task: inputTask, isComplete:false}])
        }
    }

    function deleteItem(key){
        let newList= [...list];
        newList.splice(key,1);
        setList([...newList])
    }

    return(
        <div className={styles.container}>
        <Heading numTask={list.length}/>
        <div>
            {
                list.map((listItem,i)=>{
                    return(
                        <List key={i} index={i} item={listItem.task} deleteItem={deleteItem} />
                    )
                })
            }
        </div>
        <br/>
        <InputTask addList={addList}/>
        </div>
    )
}

export default TodoList;