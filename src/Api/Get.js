import React, { useState,useEffect } from 'react'
import axios from 'axios'
function User(){
    const[state,setState]=useState([]);
    useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/users")
.then((data)=>{
    console.log(data);
    setState(data.data);
});
},[])
function add(){
    const[post,setPost]=useState([]);
    useEffect(()=>{axios.post("https://jsonplaceholder.typicode.com/users")
    .then((data)=>{
        console.data;
        setPost(
            
        )
    })
})

}
return(
    <>
    <div>
    User
    {state.map((item,i)=>{
        return(
            <div>
            <ul>
            <li key={i}>
            <p>{item.name}</p></li>
            </ul>
            </div>
        );
    })}
    </div>
    <div>
        <tr>
        <td><textarea></textarea></td>
        <td><button>Add</button></td>
        <td><button>Delete</button></td>
        <td><button>Update</button></td>
        </tr>
    </div>
    </>
);
}
export default User