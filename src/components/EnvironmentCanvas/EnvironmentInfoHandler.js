import React, { useState } from 'react';
import { Toast } from "bootstrap";
import './EnvironmentInfoStyler.css'
import { keys } from 'regenerator-runtime';

const EnvironmentInfoHandler = () => {
  const [dropdownItems, setdropdownItems] = useState([]);
  const [envparams, setenvparams] = useState({});
  let optedfor = '';



  function importAll(r) {
    let files = {};
    r.keys().map((item, index) => { files[item.replace('./', '')] = r(item); });
    return files;
  }
  const files = importAll(require.context('../EnvData', false, /\.(json)$/));

  const canvasHandler = () => {

    [files].map((obj) => setdropdownItems(Object.keys(obj)));

    const btnenv = document.getElementById('imgenv');

    if (btnenv) {


      var divelement = document.getElementById("offcanvasRight");
      divelement.className = "offcanvas offcanvas-end show"
      divelement.style = "visibility: visible;"

    }

  }


  const closeCanvasHandler = () => {
    const resetcanvas = document.getElementById("resetcanvas");
    if (resetcanvas) {

      var divelement = document.getElementById("offcanvasRight");
      divelement.className = "offcanvas offcanvas-end"
      divelement.style = "visibility: hidden;"

    }
  }

  const toastNotificationHandler = () => {

    var toastTrigger = document.getElementById('liveToastBtn');
    var toastLiveExample = document.getElementById('liveToast');
    if (toastTrigger) {
      var toast = new Toast(toastLiveExample)

      toast.show()

    }
  }

  const envUpdater = (e) => {
    const selectedoption = e.target.innerHTML;
    const buttontext = document.getElementById("dropdownMenuLink");
    buttontext.innerHTML = selectedoption;
    optedfor = files[selectedoption];
    console.log("Opted for" + typeof (optedfor));
    Object.keys(optedfor).forEach((key, index) => console.log(`At index ${index} Key is ${key} and value is ${optedfor[key]}`));
    Object.keys(optedfor).map((key, index)=> console.log(`From map At index ${index} Key is ${key} and value is ${optedfor[key]}`));
    
    setenvparams(optedfor);
  }





  return (

    <div>



      <div id="executor" className="container">

        <ul className="nav justify-content-end">

          <li className="nav-item" id="imgenv">
            <a className="nav-link active" aria-current="page" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={canvasHandler}>
              <img src="./icons/gear-wide-connected.svg" className="img-fluid" alt="environmentInfo" />
            </a>

          </li>

          <li className="nav-item" id="liveToastBtn">
            <a className="nav-link active" aria-current="page" href="#" aria-controls="offcanvasRight" onClick={toastNotificationHandler}>
              <img src="./icons/save1.svg" className="img-fluid" alt="Save Configuration" />
            </a>

          </li>


        </ul>


        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <span id="offcanvasRightLabel"><b>Environment Variables</b></span>



            <div className="dropdown">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Environment Name
              </a>
              <ul className="dropdown-menu" onClick={envUpdater} aria-labelledby="dropdownMenuLink">
                {dropdownItems.map((key) => <li key={key}><a className="dropdown-item" href="#">{key}</a></li>)}

              </ul>
            </div>



            <button id="resetcanvas" type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={closeCanvasHandler}></button>
          </div>
          <div className="offcanvas-body"> 
          
          <div className="envJsonData">

            {
              Object.keys(envparams).map((key, i) => (
                <p key={i}>
                  <span><b>Key:</b> {key} </span>
                  <br/>
                  <span><b>Value :</b> {envparams[key]}</span>
                </p>
              ))
            }
            </div>

          </div>
        </div>

      </div>




      <div id="liveToast" className="toast  position-fixed bottom-0 end-0 p-3" role="alert" aria-live="assertive" aria-atomic="true"  >
        <div >
          <div className="toast-header toast-header text-dark">
            <img src="./icons/bell.svg" className="rounded me-2" />
            <strong className="me-auto">Saved Successfully!!</strong>
            <small>11 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            <div id="notification-theme">
            </div>
            Template Saved!!
          </div>
        </div>
      </div>


    </div>
  )

};

export default EnvironmentInfoHandler;


