import React from 'react';

import './fileexplorerStyle.css'


export default class FileExplorer extends React.Component{
   changeTitle(e){
    var elem = e.target;
    if(elem.tagName.toLowerCase() == "span" && elem !== e.currentTarget)
    {
        var type = elem.classList.contains("folder") ? "folder" : "file";
        if(type=="file")
        {
            alert("File accessed");
        }
        if(type=="folder")
        {
            var isexpanded = elem.dataset.isexpanded=="true";
            if(isexpanded)
            {
                elem.classList.remove("fa-folder-o");
                elem.classList.add("fa-folder");
            }
            else
            {
                elem.classList.remove("fa-folder");
                elem.classList.add("fa-folder-o");
            }
            elem.dataset.isexpanded = !isexpanded;

            var toggleelems = [].slice.call(elem.parentElement.children);
            var classnames = "file,foldercontainer,noitems".split(",");

            toggleelems.forEach(function(element){
                if(classnames.some(function(val){return element.classList.contains(val);}))
                element.style.display = isexpanded ? "none":"block";
            });
        }
    }
    }

    render () {
        return(
            <div>                           

            <div id="hierarchy" onClick={this.changeTitle}>
            <div className="foldercontainer">
                <span className="folder fa-folder-o" data-isexpanded="true"><img></img>Folder 1</span>
                <span className="file fa-file-excel-o"><img id="file_holder"></img>File 11</span>
                <span className="file fa-file-code-o"><img id="file_holder"></img>File 12</span>
                <span className="file fa-file-pdf-o"><img id="file_holder"></img>File 13</span>
            
                
            
            
            </div>
            
            <div className="foldercontainer">
                <span className="folder fa-folder-o" data-isexpanded="true"><img className="folder fa-folder-o"></img>Folder 2</span>
                <span className="file fa-file-excel-o"><img id="file_holder"></img>File 21</span>
                <span className="file fa-file-code-o"><img id="file_holder"></img>File 22</span>
                <span className="file fa-file-pdf-o"><img id="file_holder"></img>File 23</span>
            
               
            </div>
            
            <div className="foldercontainer">
                <span className="folder fa-folder-o" data-isexpanded="true"><img className="folder fa-folder-o"></img>Folder 3</span>
                <span className="file fa-file-excel-o"><img id="file_holder"></img>File 31</span>
                <span className="file fa-file-code-o"><img id="file_holder"></img>File 32</span>
                <span className="file fa-file-pdf-o"><img id="file_holder"></img>File 33</span>
            
                
            </div>
            </div>
            
            </div>
        )
    }
}

