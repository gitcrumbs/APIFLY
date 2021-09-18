import React from 'react';
import EnvironmentInfoHandler from '../executionHandler/EnvironmentInfoHandler';

        const Header = ()=>(
            

            <header className="header navbar navbar-fixed-top navbar-inverse">
           
            <div className="container-flex">
           
               <div className="container">
                  <div id="navbar">
                     <div className="navbar-brand" >BumbleBee</div>                     
                  </div>
                  
               </div>
            
          </div>     
            <div className="container-flex">
            <div >Logout</div>
            <div id="env_container"><EnvironmentInfoHandler /></div>
            </div>
            </header>
              
            
        )


export default Header;