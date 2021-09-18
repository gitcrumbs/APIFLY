import React from 'react';
import FileExplorer from './FileExplorer';
import FileEditor from '../viewHandler/FileEditor'
import './LeftNavStyler.css'


const LeftNavigation = () => {

    return (
        <div>
        <div className="sidenav">
         <img id="folder_explorer"></img>
         <b>    File Explorer </b>
          <FileExplorer/>
        
        </div>
         
        <FileEditor/>
        </div>
    );
};



export default LeftNavigation;