import './App.css';
import Display from './component/display';
import Add from './component/add';
import {v4 as uuidv4} from 'uuid';
import Modal from "./component/Modal";
import {useState} from 'react'

import { Users } from "./component/users";




function App() {

  const [list, setList] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  //Search Const//
  const [query, setQuery] = useState("");


 

  const addName =((name, surname, id, position )=>{
  
if (name === "" ) {
  alert('Please Enter Name')

}else{
  let personName = {
    name:name,


 }

}

 
if (surname === "" ) {
  alert('Please Enter Surname')

}else{
 let personName = {
   surname:surname,

 }

}


 
if (id === "" ) {
  alert('Please Enter Id-number')

}else{
  let personName = {
    id:id,

 }

}

if (position === "" ) {
 alert('Please Enter Job-position')

}else{
  let personName = {
    position:position,

 }

}
   
 
    setList((list)=>[...list, { name:name, surname:surname, id:uuidv4(), position:position,}]);
    console.log(list);

  
 

  });


  const deleteProfile = ((i) => {
    let id = list.filter(list => list.id !== i);

   setList(id)

  });





  return (
    <div className="App">



<input
className="search"
 placeholder="Search..."
onChange={(e) => setQuery(e.target.value.toLowerCase())}
/>

<ul className="list">
          {Users.filter((asd) =>
            asd.first_name.toLowerCase().includes(query)
         ).map((user) => (
            <li className="listItem" key={user.id}>
             {user.first_name}
            </li>
        ))}
      </ul>


    
        

  <Add add={addName} />

<Display data={list} delete={deleteProfile} setOpenModal={setModalOpen} />

  {modalOpen && <Modal setOpenModal={setModalOpen} />}


 
  <button
 className="openModalBtn"
 onClick={() => {
   setModalOpen(true);
  }}
 >
  UPDATE
</button>
           
  
     
     
   </div>

   );
}



export default App;



