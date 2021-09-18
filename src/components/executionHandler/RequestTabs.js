import React from 'react';
import RequestBodyController from './RequestBodyController'
import InclusionTable from './InclusionTable'
export default class RequestTabs extends React.Component{

    constructor() {
        super();
        this.state = {
            activeTab: ""
        };
        this.tabactivationHandler = this.tabactivationHandler.bind(this);
      }
    
    tabactivationHandler = (e)=>{
        const alltabs = document.querySelectorAll('[id=navig-tab]');
        alltabs.forEach((tab)=>{
          tab.className="nav-link"
          tab.setAttribute('aria-selected', 'false')
        })

        e.target.className="nav-link active";       
        e.target.setAttribute('aria-selected', 'true');       
        
        this.setState(()=>{          
            return {activeTab: e.target.innerHTML}        
         }) 

         const navigchildnodes = document.getElementById("nav-tabContent").childNodes;
         navigchildnodes.forEach((n)=>{
             n.className="tab-pane fade"
           
         });

        const activecontent = document.getElementById(`nav-${e.target.innerHTML}`);
        activecontent.className="tab-pane fade active show"
       
    }

    render(){
        return(
          
            <div className="container">
            <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button className="nav-link" id="navig-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-parameters" aria-selected="false" onClick={this.tabactivationHandler}>Parameters</button>
              <button className="nav-link " id="navig-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-headers" aria-selected="false" onClick={this.tabactivationHandler}>Headers</button>
              <button className="nav-link" id="navig-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-body" aria-selected="false" onClick={this.tabactivationHandler}>Body</button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade" id="nav-Parameters" role="tabpanel" aria-labelledby="nav-parameters-tab">
            
            <InclusionTable/>
            
            </div>
            <div className="tab-pane fade" id="nav-Headers" role="tabpanel" aria-labelledby="nav-headers-tab">
                <InclusionTable/>
            </div>
            <div className="tab-pane fade" id="nav-Body" role="tabpanel" aria-labelledby="nav-body-tab">            
                <RequestBodyController/>
            </div>
          </div>

                

            </div>
        )
    }

}