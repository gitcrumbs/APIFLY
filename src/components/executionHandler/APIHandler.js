import React, { useState } from 'react';
import { result } from 'underscore';
import './ApiHandlerStyler.css'

const APIHandler = () => {

    const [Response, setResponse] = React.useState([]);
    const [scrollerpos, setsscrollerpos] = React.useState([]);
    const [StatusCode, setStatusCode] = React.useState([]);
    const [StatusText, setStatusText] = React.useState([false]);

    const RequestObject = {
        requestUrl: '',
        methodRequested: '',
        requestBody: ''
    }

    const getRequest = () => {
        const { requestUrl, methodRequested } = RequestObject;

        const result = fetch(requestUrl,
            {

                method: methodRequested,
                headers: {
                    'Content-Type': 'application/json'
                }

            }).then(function (response) {
                response.headers.forEach((k,v)=>console.log(k,v));
                console.log(response.headers.get('Content-Type'));
                console.log(response.headers.get('Date'));
                setStatusCode(response.status);
                setStatusText(response.ok);
                console.log(response.type);
                console.log(response.url);
                return response.json();
            }).then(result => {
                setResponse([result]);
            });


    }


    const postRequest = () => {
        const { requestUrl, methodRequested ,requestBody } = RequestObject;
        let start_time = new Date().getTime();
        const result = fetch(requestUrl,
            {

                method: methodRequested,
                headers: {
                    'Content-Type': 'application/json'
                },
                body:requestBody

            }).then(function (response) {                
               
                console.log(response.headers.get('Content-Type'));
                console.log(response.headers.get('age'));
                console.log(response);
                setStatusCode(response.status);
                setStatusText(response.ok);
                console.log(response.type);
                console.log(response.url);
                return response.json();
            }).then(result => {
                setResponse([result]);
            });


    }

    const validatexecutor = (e) => {
        e.preventDefault();
        RequestObject.requestUrl = document.getElementById("requestUrl").value
        RequestObject.methodRequested = document.getElementById("Method_Selector").value
        console.log("Form Submitted!!", document.getElementById("requestUrl").value);

        switch (RequestObject.methodRequested) {
            case 'GET':
                getRequest()
                break;

            case 'POST':
                postRequest()
                break;
            default:
                break;
        }

    };


    function scrollIndicator() {

        const el = document.getElementById("responseBody_Container");
        var winScroll = el.scrollTop || el.scrollTop;
        var height = el.scrollHeight - el.clientHeight;
        var scrolled = (winScroll / height) * 100;
        setsscrollerpos(Math.round(scrolled));
        document.getElementById("myBar").style.width = scrolled + "%";
    }


    const dotHandler = ()=>{
            const indicator = document.getElementById("dot_color");
            console.log("Value received on Status Change ",StatusCode)   ;
             indicator.className = "dot-green";
        }

    return (

        <div id="executor" >

            <section id="new-post">
                <form id="apiHandlerForm" onSubmit={validatexecutor}>
                    <div className="form-controller">
                        <select id="Method_Selector">
                            <option value="Default" defaultValue="Method">Method</option>
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PATCH">PATCH</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                        <input id="requestUrl" placeholder="Enter Request URL" type="text" />
                        <button id="Send_Request">Test</button>
                        <label><b>Request Payload :</b></label>
                        <small id="responseCode">Expected Status Code :200 </small>
                        <textarea rows="10" id="content"></textarea>
                    </div>

                </form>

            </section>

            <section id="new-post">
                <label><b>Response :</b> </label>
                <span id="dot_color" ></span>                
                <p id="responseCode" onChange={dotHandler}><b>{StatusCode}</b> {(StatusText.toString() === 'true') && <b>OK</b>}</p>
                
                <div id="responseBody_Container" onScroll={scrollIndicator}>
                    {Response.map((resp, index) => {
                        return <pre key={index}>{JSON.stringify(resp, null, 2)}</pre>
                    })}
                </div>

                <div className="progress-container">
                    <div className="progress-bar" id="myBar">
                        <div className="covered">Read {scrollerpos} %</div>
                    </div>
                </div>

            </section>


        </div>


    )

};


export default APIHandler