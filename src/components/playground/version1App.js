import React from 'react';
import ReactDOM from 'react-dom';
import FileExplorer from './components/FileExplorer/filesexplorer';
import EnvModal from './components/workspace/environmentModal';
import './appstyler.css'

class BumbleBee extends React.Component{
    
    state = {
     showmodal : false
    };

    handleShowEnvironmentModal = () =>{      
        this.setState((state)=>{          
           return {showmodal: !state.showmodal}        
        })      
    }

 getStatus = ()=>{  
     return this.state.showmodal
 }

  onButtonClick() {
    alert("Clicked on Button");
  }


 sayHello(){
    alert("Alert Ashwani Singh");
 }
    render () {
        return(
            <div>             
                <button id="envLauncher" onClick={this.handleShowEnvironmentModal}>Open Environment</button>     
                <FileExplorer/>                         
                <EnvModal 
                    modalState={this.state.showmodal}
                    handleShowEnvironmentModal={this.handleShowEnvironmentModal}                
                />
            </div>
        )
    }
}




ReactDOM.render(<BumbleBee/>,document.getElementById("app"))