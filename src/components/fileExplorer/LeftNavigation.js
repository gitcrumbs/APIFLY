import React from 'react';
import FileExplorer from './FileExplorer';
import FileEditor from '../viewHandler/FileEditor'
import './LeftNavStyler.css'





const LeftNavigation = () => {

    return (
        <div>
            <div className="grid-container">
                <div className="sidebar">
                   
                    <img id="folder_explorer"></img>
                    <b>    File Explorer </b>
                     <FileExplorer/>   
                </div>
                <div className="main-content">
                    <FileEditor/>
                </div>
            </div>
        </div>
    );
};



export default LeftNavigation;