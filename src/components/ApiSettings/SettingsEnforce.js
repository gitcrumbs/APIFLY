import React from 'react'



const togglePanelSelection = (e) => {

  var elements = document.querySelectorAll("div[class='leftbox'] span");



  var displaybox = document.querySelectorAll("div[class='rightbox'] div")
  var displayboxchildnodes = document.querySelectorAll("div[class='rightbox'] div div");

  var targetbox = document.getElementById(e.target.textContent);

  console.log("ChildNOdes", displayboxchildnodes);




  elements.forEach((ele) => {

    ele == e.target ? e.target.className = 'active' : ele.className = 'disabled';

  });

  displaybox.forEach((dis) => {

    targetbox.id == dis.id ? dis.className = '' : dis.className = 'noshow'

  })

  displayboxchildnodes.forEach((element) => {
    element.className = '';
  })

}


const addTableRow =()=> {
  var table = document.getElementById("myTable");
  var btNew = document.createElement('input');

  btNew.setAttribute('type', 'checkbox');
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.appendChild(btNew)
  cell2.innerHTML = "NEW CELL2";
  cell3.innerHTML = "NEW CELL3";
}




const SettingsEnforce = () => {
  return (
    <div>
      <div className="container">

        <div className="leftbox">
          <nav>
            <span className='disabled' onClick={togglePanelSelection} >Authorization</span>

            <span id="Body" className='disabled' onClick={togglePanelSelection} >Body</span>
            <span id="Headers" className='disabled' onClick={togglePanelSelection} >Headers</span>
          </nav>
        </div>




        <section className="rightbox">

          <tbody id="Headers_subitem" className="">

                <table id="myTable">
                <tr>
                <th>Include?</th>
                <th>Key</th>
                <th>Value</th>
               
              </tr>
                  <tr>
                  <td><input type="checkbox"></input></td>
                    <td>Row1 cell1</td>
                    <td>Row1 cell2</td>
                  </tr>
                  <tr>
                  <td><input type="checkbox"></input></td>
                    <td>Row2 cell1</td>
                    <td>Row2 cell2</td>
                  </tr>
                  <tr>
                  <td><input type="checkbox"></input></td>
                    <td>Row3 cell1</td>
                    <td>Row3 cell2</td>
                  </tr>
                </table>

          </tbody>







          <div id="Authorization" className='noshow' >
            Authorization
          </div>

          <div id="Body" className='noshow'>
            Body
          </div>
        </section>
        <div id="addNew" onClick={addTableRow}>+ Add New</div>

      </div>

    </div>

  )
}

export default SettingsEnforce;