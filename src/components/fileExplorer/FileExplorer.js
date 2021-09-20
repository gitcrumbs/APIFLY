import React, { useEffect } from 'react';
import './fileexplorerStyle.css';


const FileExplorer = () => {

    const [FileNames, setFileNames] = React.useState({});

    function importAll(r) {
        let files = {};
        r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); });
        return files;
    }
    const files = importAll(require.context('../DataFiles/Packages', false, /\.(json)$/));



    const getFileDetails = React.useMemo(() => {
        setFileNames(files);
        return FileNames;
    }, []);


    const changeTitle = (e) => {

        console.log("dir is", getFileDetails);

        var elem = e.target;
        if (elem.tagName.toLowerCase() == "span" && elem !== e.currentTarget) {
            var type = elem.classList.contains("folder") ? "folder" : "file";
            if (type == "file") {
                alert("File accessed");
            }
            if (type == "folder") {
                var isexpanded = elem.dataset.isexpanded == "true";
                if (isexpanded) {
                    elem.classList.remove("fa-folder-o");
                    elem.classList.add("fa-folder");
                }
                else {
                    elem.classList.remove("fa-folder");
                    elem.classList.add("fa-folder-o");
                }
                elem.dataset.isexpanded = !isexpanded;

                var toggleelems = [].slice.call(elem.parentElement.children);
                var classnames = "file,foldercontainer,noitems".split(",");

                toggleelems.forEach(function (element) {
                    if (classnames.some(function (val) { return element.classList.contains(val); }))
                        element.style.display = isexpanded ? "none" : "block";
                });
            }
        }
    }



    return (
        <div>

            <div id="hierarchy" onClick={changeTitle}>             

                    {
                        Object.keys(FileNames).map((key, i) => (
                            <div key={i} className="foldercontainer">
                                <span className="folder fa-folder-o" data-isexpanded="true"><img></img>{key}</span>
                                <span className="file fa-file-excel-o"><img id="file_holder"></img>File 11</span>
                                <span className="file fa-file-code-o"><img id="file_holder"></img>File 12</span>
                                <span className="file fa-file-pdf-o"><img id="file_holder"></img>File 13</span>
                            </div>
                        ))
                    }
                </div>

            <div id="notifications"></div>

        </div>
    )

}

export default FileExplorer