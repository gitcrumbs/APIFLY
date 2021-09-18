import React from 'react';
import {Toast} from "bootstrap";


export default class EnvironmentInfoHandler extends React.Component{

canvasHandler = ()=>{
                
    const  btnenv = document.getElementById('imgenv');  

    if(btnenv){
   
          
        var divelement = document.getElementById("offcanvasRight");
        divelement.className="offcanvas offcanvas-end show"
        divelement.style= "visibility: visible;"   
       
    }

    }


    closeCanvasHandler=()=>{
      const resetcanvas = document.getElementById("resetcanvas");
      if(resetcanvas){    
       
        var divelement = document.getElementById("offcanvasRight");
        divelement.className="offcanvas offcanvas-end"
        divelement.style= "visibility: hidden;"    
    
    }
    }

    toastNotificationHandler=()=>{

      var toastTrigger = document.getElementById('liveToastBtn');
      var toastLiveExample = document.getElementById('liveToast');
        if (toastTrigger) {         
            var toast = new Toast(toastLiveExample)
            
            toast.show()
         
        }
    }

    envUpdater=(e)=>{     
      const selectedoption = e.target.innerHTML;
      const buttontext = document.getElementById("dropdownMenuLink");
      buttontext.innerHTML = selectedoption;
       
    }


    render(){
        return(

        <div>

   
          
            <div id="executor" className="container">
       
                <ul className="nav justify-content-end">
            
                        <li className="nav-item" id="imgenv">
                            <a className="nav-link active" aria-current="page"  href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={this.canvasHandler}>                                        
                                <img src="./icons/gear-wide-connected.svg"  className="img-fluid" alt="environmentInfo"/>   
                            </a>                         
                             
                        </li>

                        <li className="nav-item" id="liveToastBtn">
                            <a className="nav-link active" aria-current="page"  href="#" aria-controls="offcanvasRight" onClick={this.toastNotificationHandler}>                                        
                                <img src="./icons/save1.svg"  className="img-fluid" alt="Save Configuration"/>   
                            </a>                   
                             
                        </li>

                    
                </ul>


                <div className="offcanvas offcanvas-end"  tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                  <span id="offcanvasRightLabel"><b>Environment Variables</b></span>



                  <div className="dropdown">
                  <a className="btn btn-secondary dropdown-toggle"  href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Environment Name
                  </a>
                
                  <ul className="dropdown-menu" onClick={this.envUpdater} aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Test</a></li>
                    <li><a className="dropdown-item" href="#">Staging</a></li>
                    <li><a className="dropdown-item" href="#">Production</a></li>
                  </ul>
                </div>



                  <button id="resetcanvas" type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={this.closeCanvasHandler}></button>
                </div>
                <div className="offcanvas-body">

                <table className="table table-borderless">
                <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Variable Name</th>
                <th scope="col">Variable Value</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Realm</td>
                <td>aws:us:oregon</td>
                
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>env</td>
                <td>int</td>
                
              </tr>
              
            </tbody>
          
            </table>
                </div>
              </div>
        
            </div>




        <div id="liveToast" className="toast  position-fixed bottom-0 end-0 p-3" role="alert" aria-live="assertive" aria-atomic="true"  >
            <div >
            <div className="toast-header toast-header text-dark">
                <img src="./icons/bell.svg" className="rounded me-2"  />
                <strong className="me-auto">Saved Successfully!!</strong>
                <small>11 mins ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
            <div id="notification-theme">
            </div>
               Template Saved!!
            </div>
            </div>
            </div> 


        </div>
        )
    }
}


