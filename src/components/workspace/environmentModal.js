import React from 'react';
import Modal from 'react-modal';



const EnvModal = (props) =>(    
    <Modal
     isOpen={props.modalState}
     contentLabel= "Selected Option"
     appElement={document.getElementById('app')}
    >
         <h3>
            Environment Modal Test
        </h3>

        <button onClick={props.handleShowEnvironmentModal}>Save</button>
        <button onClick={props.handleShowEnvironmentModal}>Cancel</button>

    </Modal>     
)

export default EnvModal;