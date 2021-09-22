import React from "react";
import Draggable from 'react-draggable';
import './HelperWidget.css';

const EditHelperWidget = () => {  
    
    const handleEvent = ((e, data) => {
      console.log('Event Type', e.type);
      console.log(e, data);
    });    
  
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
  
        <div id="jsonpath_widget" className="jsonPath_Evaluator">JSON Path Widget</div>
       
        </Draggable>
  
        <div>
       
       
    </div>
      </div>
  
  
  
    )
  
  };
  

export default EditHelperWidget;