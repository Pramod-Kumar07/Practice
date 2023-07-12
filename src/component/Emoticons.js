import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './Emoticons.css';

function Emoticons() {

    const [emojis, setEmojis] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=> {
        axios.get('https://emoji-api.com/emojis?access_key=b4ba7b411032e1a745e06443f0937d939a1c74d0')
        .then((res) => {
            console.log(res.data);
            setEmojis(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);

    const filteredEmoji = emojis.filter((e) => {
        if(e.unicodeName.includes(search.toLowerCase()) )
        return e
    });
console.log(filteredEmoji)
  return (
    <Fragment>
        <input type='search' value={search} onChange={(e) => setSearch(e.target.value)} className='searchBar' placeholder='Type emoji name to search for it'/>
       
        <div className='container'> 
            {
                filteredEmoji.map((emoji) => {
                    return(
                        <div key={emoji.unicodeName} >
                            {emoji.character}
                        </div>
                    )
                })
            }
        </div>
    </Fragment>
  )
}

export default Emoticons