
import { useState } from "react";

function Add(props){

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [id, setId] = useState('');
    const [position, setPosition] = useState('');

    const AddPersonName = (()=>{
        
        props.add(name, surname, id, position);

    
    });



  

    return(
        <div>
            <h1>Employee App</h1>
        <input type="text" placeholder="Employee Name" onChange={(event) => setName(event.target.value)}/>  
       
        <br/>
        <input type="text" placeholder="Employee Surname" onChange={(event) => setSurname(event.target.value)}/>  
        <br/>
        <input type="text" placeholder="Employee Id" onChange={(event) => setId(event.target.value)}/>  
        <br/>
        <input className="id" type="text" placeholder="Job Title" onChange={(event) => setPosition(event.target.value)}/> 
        <br/> 
        <button className="btn" onClick={AddPersonName}>ADD</button>
   

        </div>
    )
}

export default Add