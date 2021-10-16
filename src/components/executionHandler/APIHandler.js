import React, { useState } from 'react';
import { result } from 'underscore';
import './ApiHandlerStyler.css';
import JsonVIewEditor from '../JsonViewer/JsonVIewEditor';
import Draggable from 'react-draggable';
import InclusionTable from './InclusionTable';
import FileEditor from '../viewHandler/FileEditor';
import AuthSidePanel from '../AuthPanel/AuthSidePanel';
import { combineReducers, createStore } from 'redux';

const APIHandler = () => {
  var sendbutton;
  const [Response, setResponse] = React.useState([{}]);
  const [scrollerpos, setsscrollerpos] = React.useState([]);
  const [StatusCode, setStatusCode] = React.useState([]);
  const [StatusText, setStatusText] = React.useState([false]);
  const [statusIndicator, setstatusIndicator] = React.useState([]);
  const [RequestBody, setRequestBody] = React.useState({});
  const [requestBodyOption, setrequestBodyOption] = React.useState('');
  const [enableDrag, setenableDrag] = React.useState(false);

  const SuccessStatus = {
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status (WebDAV)',
    208: 'Already Reported (WebDAV)',
  };
  const redirectionError = {
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'See Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    306: '(Unused)',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect (experimental)',
  };
  const clientError = {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Request Entity Too Large',
    414: 'Request-URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Requested Range Not Satisfiable',
    417: 'Expectation Failed',
    418: "I'm a teapot (RFC 2324)",
    420: 'Enhance Your Calm (Twitter)',
    422: 'Unprocessable Entity (WebDAV)',
    423: 'Locked (WebDAV)',
    424: 'Failed Dependency (WebDAV)',
    425: 'Reserved for WebDAV',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    444: 'No Response (Nginx)',
    449: 'Retry With (Microsoft)',
    450: 'Blocked by Windows Parental Controls (Microsoft)',
    451: 'Unavailable For Legal Reasons',
    499: 'Client Closed Request (Nginx)',
  };
  const serverError = {
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates (Experimental)',
    507: 'Insufficient Storage (WebDAV)',
    508: 'Loop Detected (WebDAV)',
    509: 'Bandwidth Limit Exceeded (Apache)',
    510: 'Not Extended',
    511: 'Network Authentication Required',
    598: 'Network read timeout error',
    599: 'Network connect timeout error',
  };

  const responseDict = {
    0: '',
    1: 'Fetching...',
    ...SuccessStatus,
    ...redirectionError,
    ...clientError,
    ...serverError,
  };

  const RequestObject = {
    requestUrl: '',
    methodRequested: '',
    requestBody: '',
  };

  const getRequest = () => {
    const { requestUrl, methodRequested } = RequestObject;

    if (requestUrl.length > 0 && methodRequested.length > 0) {
      sendbutton.className = '';
      sendbutton.className = 'Send_Request_loading';
      setStatusCode(1);
      const result = fetch(requestUrl, {
        method: methodRequested,
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(function (response) {
          response.headers.forEach((k, v) => console.log(k, v));
          setstatusIndicator(getstatusIndicator(response.status));
          setStatusCode(response.status);
          setStatusText(response.ok);
          return response.json();
        })
        .then((result) => {
          setResponse([result]);
        })
        .catch((err) => {
          console.log('Error', err);
        });
    }
  };

  const postRequest = () => {
    const { requestUrl, methodRequested, requestBody } = RequestObject;

    let start_time = new Date().getTime();
    if (requestUrl.length > 0 && methodRequested.length > 0) {
      const result = fetch(requestUrl, {
        method: methodRequested,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then(function (response) {
          setStatusCode(response.status);
          setstatusIndicator(getstatusIndicator(response.status));
          setStatusText(response.ok);
          console.log(response.type);
          console.log(response.url);
          return response.json();
        })
        .then((result) => {
          setResponse([result]);
        })
        .catch((err) => {
          console.log('Error', err);
        });

      sendbutton.className = '';
      sendbutton.className = 'Send_Request_loading';
      setStatusCode(1);
    } else {
      console.log('NO Request Body Found');
    }
  };

  function checkProperties(obj) {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != '') return false;
    }
    return true;
  }
  const validatexecutor = (e) => {
    e.preventDefault();
    sendbutton = document.getElementById('Send_Request');
    setstatusIndicator(getstatusIndicator(0));
    setResponse([]);
    setStatusCode(0);
    RequestObject.requestUrl = document.getElementById('requestUrl').value;
    RequestObject.methodRequested =
      document.getElementById('Method_Selector').value;
    RequestObject.requestBody = RequestBody;

    switch (RequestObject.methodRequested) {
      case 'GET':
        getRequest();

        break;

      case 'POST':
        postRequest();

        break;
      default:
        break;
    }
  };

  function scrollIndicator() {
    const el = document.getElementById('responseBody_Container');
    var winScroll = el.scrollTop || el.scrollTop;
    var height = el.scrollHeight - el.clientHeight;
    var scrolled = (winScroll / height) * 100;
    setsscrollerpos(Math.round(scrolled));
    document.getElementById('myBar').style.width = scrolled + '%';
  }

  const getstatusIndicator = (payload) => {
    console.log('Inside Status Indicator check', typeof payload);
    sendbutton.className = '';
    sendbutton.className = 'Send_Request_normal';
    if (payload in SuccessStatus) {
      return 'dot-green';
    } else if (payload in redirectionError) {
      return 'dot-red';
    } else if (payload in clientError) {
      return 'dot-red';
    } else if (payload in serverError) {
      return 'dot-red';
    } else {
      return '';
    }
  };

  const validateRequestPayload = (e) => {
    if (e.target.value.length > 0) {
      var obj = JSON.parse(e.target.value);
      var pretty = JSON.stringify(obj, undefined, 4);
      e.target.value = pretty;
      console.log('JSON Request Payload is' + e.target.value);
      setRequestBody([e.target.value]);
      console.log('Type' + RequestBody);
    } else {
    }
  };

  const handleEvent = (e, data) => {
    // console.log('Event Type', e.type);
    //console.log(e, data);
    var element = document.getElementById('executor');
  };

  const onChangeValue = (event) => {
    setrequestBodyOption(event.target.value);
  };

  const displayBody = (event) => {
    document.getElementById('requestBodyType').className = '';
    document.getElementById('requestBodyType').className =
      'requestBodyTypeactive';

    console.log(document.getElementById('requestBodyType').className);
  };

  const requestParams = (e) => {
    var reqbdy = e.target.value;
    switch (reqbdy) {
      case 'NONE':
        console.log('RequestBody is set to', e.target.value);
        break;
      case 'KeyValuePairs':
        console.log('RequestBody is set to', e.target.value);
        break;
      // setRequestBody({})
      //Highligt the related text form area
      case 'JSON':
        console.log('RequestBody is set to', e.target.value);
        break;
      case 'KeyValuePairs':
        console.log('RequestBody is set to', e.target.value);
        break;
      case 'x-www-form-urlencoded':
        console.log('RequestBody is set to', e.target.value);
        break;
    }
  };

  const toggleDraggable = () => {
    console.log('Click received on pin');
    var pinstatus = document.getElementById('pin_box').className;

    if (pinstatus == 'pinbox_initial') {
      document.getElementById('pin_box').className = '';
      document.getElementById('pin_box').className = 'pinbox_pinned';
    } else if (pinstatus == 'pinbox_pinned') {
      document.getElementById('pin_box').className = '';
      document.getElementById('pin_box').className = 'pinbox_initial';
    }
    setenableDrag(!enableDrag);
  };
  return (
    <div>
      <Draggable
        id="draggable_box"
        onDrag={handleEvent}
        onStart={handleEvent}
        onStop={handleEvent}
        onMouseDown={handleEvent}
        onMouseUp={handleEvent}
        onTouchStart={handleEvent}
        onTouchEnd={handleEvent}
        disabled={enableDrag}
      >
        <div id="executor">
          <div
            id="pin_box"
            onClick={toggleDraggable}
            className="pinbox_initial"
          ></div>

          <AuthSidePanel />
          <section id="new-post">
            <form id="apiHandlerForm">
              <div className="form-controller">
                <div id="request_execute">
                  <select id="Method_Selector">
                    <option value="Default" defaultValue="Method">
                      Method
                    </option>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PATCH">PATCH</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                  </select>
                  <input
                    id="requestUrl"
                    placeholder="Request Endpoint"
                    type="text"
                  />
                  <img
                    onClick={validatexecutor}
                    className="Send_Request_normal"
                    id="Send_Request"
                  ></img>
                </div>

                <div id="tsum-tabs">
                  <main>
                    <input
                      onClick={displayBody}
                      id="tab1"
                      type="radio"
                      name="tabs"
                    />
                    <label htmlFor="tab1">Body</label>
                    <input id="tab2" type="radio" name="tabs" />
                    <label htmlFor="tab2">Headers</label>
                  </main>
                </div>

                <div
                  id="requestBodyType"
                  className="requestBodyTypedisabled"
                  onChange={onChangeValue}
                >
                  <div>
                    <input
                      name="requestBodyType_radio"
                      type="radio"
                      value="NONE"
                      onChange={requestParams}
                    />
                    <label>None</label>
                  </div>

                  <div>
                    <input
                      name="requestBodyType_radio"
                      type="radio"
                      value="KeyValuePairs"
                      onChange={requestParams}
                    />
                    <label>Form Data</label>
                  </div>
                  <div>
                    <input
                      name="requestBodyType_radio"
                      type="radio"
                      value="JSON"
                      onChange={requestParams}
                    />
                    <label>JSON</label>
                  </div>
                  <div>
                    <input
                      name="requestBodyType_radio"
                      type="radio"
                      value="x-www-form-urlencoded"
                      onChange={requestParams}
                    />
                    <label>x-www-form-urlencoded</label>
                  </div>
                </div>

                {requestBodyOption === 'KeyValuePairs' && (
                  <div>
                    <InclusionTable />
                  </div>
                )}

                {requestBodyOption === 'JSON' && (
                  <div>
                    <label id="requestlabel">Request Payload :</label>
                    <div id="requestCode">
                      <span>Expected Status Code: </span>
                      <input id="expected_code" defaultValue="200"></input>
                    </div>
                    <textarea
                      rows="5"
                      onChange={validateRequestPayload}
                      id="reqcontent"
                    >
                      {JSON.stringify(RequestBody) == '{}'
                        ? JSON.stringify(RequestBody)
                        : RequestBody}
                    </textarea>
                  </div>
                )}

                {requestBodyOption === 'x-www-form-urlencoded' && (
                  <div>
                    <InclusionTable />
                  </div>
                )}
              </div>
            </form>
          </section>
          <section id="new-post">
            <div id="responseCode">
              <label>Response :</label>

              <label id="dot_color" className={statusIndicator}></label>
              <label>
                {StatusCode > 1 ? StatusCode : ''}&nbsp;
                {responseDict[StatusCode]}
              </label>
            </div>

            <div id="responseBody_Container" onScroll={scrollIndicator}>
              {Response.map((resp, index) => {
                return <pre key={index}>{JSON.stringify(resp, null, 2)}</pre>;
              })}
            </div>

            <div className="progress-container">
              <div className="progress-bar" id="myBar">
                <div className="covered">Read {scrollerpos} %</div>
              </div>
            </div>
          </section>
        </div>
      </Draggable>
    </div>
  );
};

export default APIHandler;
