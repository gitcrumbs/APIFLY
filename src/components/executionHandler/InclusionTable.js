import React from 'react';
export default class InclusionTable extends React.Component{

    render(){
        return(

          <div className="container" id="tableContainer">
            <table className="table table-borderless">
            <thead>
          <tr>
            <th scope="col">Apply</th>
            <th scope="col">Key</th>
            <th scope="col">Value</th>
            <th scope="col">Description</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>               
           <th scope="row"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> </th>                  
           <td>Mark</td>
            <td>Otto</td>
            
          </tr>
          <tr>
          <th scope="row"> <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" /> </th> 
            
            <td>Jacob</td>
            <td>Thornton</td>           
          </tr>
          
        </tbody>
      
        </table>
        </div>    
        )
    }

}