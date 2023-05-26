import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';


function Counter() {
    const {value}= useSelector((state)=>state.counter);

    const dispatch = useDispatch();

    function increase(){
        dispatch(increment());
    }

    function decrease(){
        dispatch(decrement());
    }
  return (
    <div>
        <button onClick={increase}> Increase value </button>
        {value}
        <button onClick={decrease}> Decrease value </button>
    </div>
  )
}

export default Counter