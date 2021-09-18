import React from 'react';
import APIHandler from './APIHandler';

export default class TokenHandler extends React.Component{

    accordionHandler=()=>{
        const accordionbtn = document.getElementById("accordion-btn");
        const accordioncontent = document.getElementById("collapseOne");

        var accordionexpanded = "accordion-button"; 
        var accordioncollapsed= 'accordion-button collapsed'        
        var appliedaccordion = accordionbtn.className       

        accordionbtn.className = (appliedaccordion===accordioncollapsed) ?  accordioncollapsed :accordionexpanded  ;       


    }


    render(){
        return(

            <div className="container">
            
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button id = "accordion-btn" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick={this.accordionHandler}>
                  Authorization Handler
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">               
                    <APIHandler/>               
                </div>      
               
              </div>
            </div>
           
            </div>
            <br/>  
          </div>
          
        )
    }
}
