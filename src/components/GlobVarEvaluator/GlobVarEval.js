import React from "react";
import './GlobVarEval.css';

const EditHelperWidget = () => {  
    
    const handleEvent = ((e, data) => {
      console.log('Event Type', e.type);
      console.log(e, data);
    });    
  
    return (
  
      <div> 
  
            <section id="evaluated_expressions">Variable Evaluator</section>
      </div>
  
  
  
    )
  
  };
  

export default EditHelperWidget;