
import React from 'react';
import './editorStyler.css';
import Draggable from 'react-draggable';
import $ from 'jquery';
import ReactModal from 'react-modal';
import  BreadCrumbsNavigator from '../BreadCrumbs/BreadCrumbsNavigator'
import EditHelperWidget from '../HelperWidgets/EditHelperWidget';
import GlobVarEval from '../GlobVarEvaluator/GlobVarEval'
const buttonToggleCheck = () => {
  

  const element = document.getElementById("initial_state");  

  const changed = "iconHolder_expanded";
  const initial = "iconHolder";
  console.log("Current Style", String(element.className).toLowerCase());
  if (String(element.className).toLowerCase()===initial.toLowerCase()) {
    console.log("Inside Check");
    element.classList.remove(initial);    
    element.classList.toggle(changed);
    var nodes = document.querySelectorAll('#toggle_display');
    for(var i=1; i<nodes.length; i++) {
      if (nodes[i].nodeName.toLowerCase() == 'li') {
        if(nodes[i].style!==''){
          nodes[i].classList.remove("display_enabled");
        }   
        
       }
  }

  setTimeout(()=>expandItems(),50);
    

  } else if (String(element.className).toLowerCase()===changed.toLowerCase()){

    element.classList.remove(changed);    
    element.classList.toggle(initial);
    var nodes = document.getElementById('list_parent').childNodes;
    for(var i=1; i<nodes.length; i++) {
      if (nodes[i].nodeName.toLowerCase() == 'li') {
        if(nodes[i].style!==''){
          nodes[i].removeAttribute('style');
          //nodes[i].classList.add("display_enabled");
        }   
        
       }
  }

  setTimeout(()=>hideTexts(),500);
  
  }
}


const hideTexts = ()=>{
  var nodes = document.getElementById('list_parent').childNodes;
  for(var i=1; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'li') {
      if(nodes[i].style!==''){       
        nodes[i].classList.add("display_enabled");
      }   
      
     }
}
}


const expandItems = () => {
  //const element = document.getElementById("initial_state");
 // element.classList.remove("initial_state");
  var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = '8em', //distance from center
    start = -60, //shift start from 0
    $elements = $('li:not(:first-child)'),
    numberOfElements = (type === 1) ? $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
    slice = 120 * type / numberOfElements;

  $elements.each(function (i) {
    var $self = $(this),
      rotate = slice * i + start,
      rotateReverse = rotate * -1;
     


    $self.css({
      'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)',

    });
  });





}



export const DraggableLeftNav = () => {
  const [showModal, setshowModal] = React.useState(false);


  const handleEvent = ((e, data) => {
    console.log('Event Type', e.type);
    console.log(e, data);
  });

  const handleOpenModal = ()=> {
    setshowModal(true);
  }
  
 const handleCloseModal = ()=>{
    setshowModal(false);
  }


  return (

    <div>


      <Draggable

        onDrag={handleEvent}
        onStart={handleEvent}
        onStop={handleEvent}
        onMouseDown={handleEvent}
        onMouseUp={handleEvent}
        onTouchStart={handleEvent}
        onTouchEnd={handleEvent}
      >

      
      
      <ul id="list_parent" onDoubleClick={buttonToggleCheck} >
    
        <li><p id="initial_state" className="iconHolder"></p></li>
          <li id="toggle_display" onClick={handleOpenModal} className="display_enabled">Well This is at Say!Test!ell This is at Say!Test!ell This is at Say!Test!</li>
          <li id="toggle_display" onClick={handleOpenModal} className="display_enabled">Well This is at Say!Test!ell This is at Say!Test!ell This is at Say!Test!</li>
          <li id="toggle_display" onClick={handleOpenModal} className="display_enabled">Well This is at Say!Test!ell This is at Say!Test!ell This is at Say!Test!</li>
          <li id="toggle_display" onClick={handleOpenModal} className="display_enabled">Well This is at Say!Test!ell This is at Say!Test!ell This is at Say!Test!</li>
          <li id="toggle_display" onClick={handleOpenModal} className="display_enabled">Well This is at Say!Test!ell This is at Say!Test!ell This is at Say!Test!</li>
          <li id="toggle_display" onClick={handleOpenModal} className="display_enabled">Well This is at Say!Test!ell This is at Say!Test!ell This is at Say!Test!</li>
          <li id="toggle_display" onClick={handleOpenModal} className="display_enabled">Well This is at Say!Test!ell This is at Say!Test!ell This is at Say!Test!</li>
          <li id="toggle_display" onClick={handleOpenModal} className="display_enabled">Well This is at Say!Test!ell This is at Say!Test!ell This is at Say!Test!</li>
        </ul>       

      </Draggable>

      <div>
      <button id="openModal"onClick={handleOpenModal}>Trigger Modal</button>
      <ReactModal id="ConfigCreator"
           ariaHideApp={false}
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
      >
          <button id="openModal" onClick={handleCloseModal}>Close Modal</button>
          <BreadCrumbsNavigator/>
          <EditHelperWidget/>
          <GlobVarEval/>
      </ReactModal>
  </div>
    </div>



  )

};

export default DraggableLeftNav;


