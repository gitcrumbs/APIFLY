import React from 'react';
import './FileEditorStyle.css';
import './FileTabs';
import APIHandler from '../executionHandler/APIHandler';


const FileEditor = () => {

  var closebtns = document.getElementsByClassName("close");


  function importAll(r) {

    let files = {};
    r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); });
    return files;
  }

  const files = importAll(require.context('../DataFiles/Packages', false, /\.(json)$/));



  return (

    <div >
      <div id="tsum-tabs">
       
        <main>

          <input id="tab3" type="radio" name="tabs"/>
                <label htmlFor="tab3">Authorization</label>

          <input id="tab1" type="radio" name="tabs"/>
            <label htmlFor="tab1">Body</label>

            <input id="tab2" type="radio" name="tabs"/>
              <label htmlFor="tab2">Headers</label>

            


                  <div id="content1">
                    <p>
                      CONTENT FIR TAB 1
                    </p>
                  </div>

                  <div id="content2">
                    <p>
                      CONTENT FIR TAB 2
                    </p>
                  </div>

                  <div id="content3">
                    <p>
                      CONTENT FIR TAB 3
                    </p>
                  </div>

                

                </main>
              </div>
            </div>

            )
};
            export default FileEditor;