import React from 'react';
import InclusionTable from './InclusionTable'; 
import RequestPayloadHandler from './RequestPayLoadHandler'; 



export default class RequestBodyController extends React.Component{


    constructor() {
        super();
        this.state = {
            requestBodyOption: ""
        };
        this.onChangeValue = this.onChangeValue.bind(this);
      }
    
      onChangeValue(event) {      
        this.setState(()=>{          
            return {requestBodyOption: event.target.value}        
         })          
      }
    
    

    render(){
    return(
    <div className="container" id="reqBodyController">

       <div onChange={this.onChangeValue} >  
          
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="None"/>
            <label className="form-check-label" htmlFor="inlineRadio1">None</label>
            </div>

            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Key Value Pairs"/>
            <label className="form-check-label" htmlFor="inlineRadio2">Key Value Pair(s)</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="JSON"/>
            <label className="form-check-label" htmlFor="inlineRadio3">JSON</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="x-www-form-urlencoded" />
            <label className="form-check-label" htmlFor="inlineRadio4">x-www-form-urlencoded</label>
            </div>              
            
                   
        </div> 
                {(this.state.requestBodyOption==='Key Value Pairs') && (
                    <div>
                    <InclusionTable/>
                    </div>
                )}

                {(this.state.requestBodyOption==='JSON') && (
                    <div>
                    <RequestPayloadHandler/>
                    </div>
                )}

                {(this.state.requestBodyOption==='x-www-form-urlencoded') && (
                    <div>
                    <InclusionTable/>
                    </div>
                )}

        </div>

        )
    
    
    }

}