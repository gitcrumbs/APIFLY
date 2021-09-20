import React from 'react';
import ReactModal from 'react-modal';

const ModalItem = () => {

 const [showModal, setshowModal] = React.useState(false);
 
  
  const handleOpenModal = ()=> {
    setshowModal(true);
  }
  
 const handleCloseModal = ()=>{
    setshowModal(false);
  }
  
    return (

        <div>


            <div>
                <button onClick={handleOpenModal}>Trigger Modal</button>
                <ReactModal 
                     ariaHideApp={false}
                    isOpen={showModal}
                    contentLabel="Minimal Modal Example"
                >
                    <button onClick={handleCloseModal}>Close Modal</button>
                </ReactModal>
            </div>



        </div>
    )
};

export default ModalItem;