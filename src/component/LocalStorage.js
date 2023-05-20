import React, { useState } from 'react'

function LocalStorage() {
    const [data, setData]= useState({
        email:'',
        password: ''
    });

    

    function handleClick(){
        localStorage.setItem('data', JSON.stringify(data));
        const storedData=localStorage.getItem('data');
        console.log(storedData);
        setData({email:'', password:''});
    }


    
  return (
    <div>
        <input type='text' placeholder='add email' value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
        <input type='text' placeholder='enter passwrod' value={data.password} onChange={(e)=>setData({...data,password: e.target.value})} />
        <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default LocalStorage;