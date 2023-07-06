import React, { useState } from 'react';
import styles from './Table.module.css';

function TableGenerator() {

    const[number, setNumber] = useState('');

    const array = Array.from({length: 10}, (e,i)=> e=i+1);

    
  return (
    <div className={styles.wrapper}>
        <input 
            type='number' 
            placeholder='Enter any number'
            value={number} 
            onChange={(e) => {setNumber(e.target.value)}}
        />

        <div>
            Table
        </div>

        {
            array.map((e) => { 
                return number && 
                    <div className={styles.table}>
                        {e*number}
                    </div>
                })
        }
    </div>
  )
}

export default TableGenerator;