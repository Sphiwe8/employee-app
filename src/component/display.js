import '../css/display.css';
import React from 'react';


function display(props, update) {

    const deleteProfile = ((id) => {
        props.delete(id)

   

    

    })

    const setModalUpdate = ((name,surname,position) => {
        update.setModalOpen(name,surname,position)

   

    

    })


   


    return (
        <div className='container'>



            <div className='row'>
                {props.data.map((personName) => (



                    <div className=' card col-lg-2 mx-3 mt-2'>

                     
                        <h5  className='col-16 bg-secondary'>Name:</h5>
                        <div className='info'>{personName.name}</div>
                     

                        <h5>Surname:</h5>
                        <div className='info'>{personName.surname}</div>

                        <h5>Id-number:</h5>
                        <div className='info'>{personName.id}</div>

                        <h5>Job-Title:</h5>
                        <div className='info'>{personName.position}</div>

                    <button className='btn2'   onClick={() => {
    setModalUpdate(true);
  }}>Update</button>

                    <button className='btn1' onClick={ () => deleteProfile(personName.id)}>Delete</button>
                        
                    

                  

     
                 
                


                    </div>







                ))}

            </div>


            

        </div>






    )
};

export default display