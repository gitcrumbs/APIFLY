import React from 'react';
import './FileEditorStyle.css';
import './FileTabs';
import APIHandler from '../executionHandler/APIHandler';


const FileEditor = () => {

  var closebtns = document.getElementsByClassName("close");
 


  function importAll(r){
    
    let files = {};
    r.keys().map((item,index)=>{files[item.replace('./','')]=r(item);});
    return files;
}

   const files = importAll(require.context('../DataFiles/Packages',false,/\.(json)$/));
   

    const listFileObject= ()=>{        
        console.log(files);   
    };
    







  return (

    <div className="fileEditor">
      <section id="execution_summary">
        <small><b>Execution Summary:</b></small><br/>
        <div>Hello Ashu</div>
        <div>Hello Ashu</div>
        <div>Hello Ashu</div>
        <div>Hello Ashu</div>
        <div>Hello Ashu</div>
        <div>Hello Ashu</div>
        <div>Hello Ashu</div>
        <div>Hello Ashu</div>
        <div>Hello Ashu</div>

      </section>

      <div className="tabset">

        <input type="radio" name="tabset" id="tab1" aria-controls="marzen" defaultChecked />
        <label htmlFor="tab1">Märzen  <span className="close" onClick={listFileObject}>×</span></label>

        <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
        <label htmlFor="tab2">Rauchbier <span className="close">×</span></label>

        <input type="radio" name="tabset" id="tab3" aria-controls="dunkles" />
        <label htmlFor="tab3">Dunkles Bock <span className="close">×</span></label>

        <div className="tab-panels">
          <section id="marzen" className="tab-panel">
            <APIHandler />
          </section>
          <section id="rauchbier" className="tab-panel">
            <h2>6B. Rauchbier</h2>
            <p><strong>Overall Impression:</strong>  An elegant, malty German amber lager with a balanced, complementary beechwood smoke character. Toasty-rich malt in aroma and flavor, restrained bitterness, low to high smoke flavor, clean fermentation profile, and an attenuated finish are characteristic.</p>
            <p><strong>History:</strong> A historical specialty of the city of Bamberg, in the Franconian region of Bavaria in Germany. Beechwood-smoked malt is used to make a Märzen-style amber lager. The smoke character of the malt varies by maltster; some breweries produce their own smoked malt (rauchmalz).</p>
          </section>
          <section id="dunkles" className="tab-panel">
            <h2>6C. Dunkles Bock</h2>
            <p><strong>Overall Impression:</strong> A dark, strong, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.</p>
            <p><strong>History:</strong> Originated in the Northern German city of Einbeck, which was a brewing center and popular exporter in the days of the Hanseatic League (14th to 17th century). Recreated in Munich starting in the 17th century. The name “bock” is based on a corruption of the name “Einbeck” in the Bavarian dialect, and was thus only used after the beer came to Munich. “Bock” also means “Ram” in German, and is often used in logos and advertisements.</p>
          </section>
        </div>

      </div>

    </div>
  )
};
export default FileEditor;