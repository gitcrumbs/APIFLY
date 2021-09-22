import { left } from "@popperjs/core";
import React from "react";
import ReactDom from "react-dom";
import JsonViewer from "react-json-view";
import './jsonStyler.css'

function importAll(r){
    
    let files = {};
    r.keys().map((item,index)=>{files[item.replace('./','')]=r(item);});
    return files;
}

const files = importAll(require.context('../DataFiles/Packages',false,/\.(json)$/));

console.log(files);
   
  
    
const JsonVIewEditor = (props) =>{
    const [FileNames, setFileNames] = React.useState({});

    const getFileDetails = React.useMemo(() => {
      
        setFileNames(files);
        return FileNames;
    }, [FileNames]);
    return (

        <div id="json_viewer">
        <JsonViewer 
        sortKeys
        style={{  backgroundColor: "white", alignContent:left }}
        src={getFileDetails}
        collapseStringsAfterLength={12}
        onEdit={e => {
            console.log("edit callback", e)
            if (e.new_value == "error") {
                return false
            }
        }}
        onDelete={e => {
            console.log("delete callback", e)
        }}
        onAdd={e => {
            console.log("add callback", e)
            if (e.new_value == "error") {
                return false
            }
        }}
        onSelect={e => {
            console.log("select callback", e)
            console.log(e.namespace)
        }}
        displayObjectSize={true}
        name={false}
        enableClipboard={copy => {
            console.log("you copied to clipboard!", copy)
        }}
        shouldCollapse={({ src, namespace, type }) => {
            if (type === "array" && src.indexOf("test") > -1) {
                return true
            } else if (namespace.indexOf("moment") > -1) {
                return true
            }
            return false
        }}
    />

    <br />

    
        </div>
    )

}


export default JsonVIewEditor;