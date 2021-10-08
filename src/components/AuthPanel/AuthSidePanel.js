import React, { useEffect, Component } from 'react';
import Select from 'react-select';
import './Panel.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import InclusionTable from '../executionHandler/InclusionTable';
import OAuth2Template from '../AuthTypes/OAuth2Template';

const options = [
  { value: 'NoAuth', label: 'No Auth' },
  { value: 'OAuth1.0', label: 'OAuth1.0' },
  { value: 'OAuth2.0', label: 'OAuth2.0' },
  { value: 'APIKEY', label: 'APIKEY' },
  { value: 'BearerToken', label: 'Bearer Token' },
];

const toggleExpandCollapseAuth = () => {
  var itemboard = document.getElementById('AuthBoard');
  var sidePanel = document.getElementById('rightleft');
  console.log('Child Nodes of Auth board', itemboard.childNodes);
  itemboard.className == 'AuthBoard_Collapsed' || itemboard.className == ''
    ? (itemboard.className = 'AuthBoard_Enabled')
    : (itemboard.className = 'AuthBoard_Collapsed');

  sidePanel.className == 'SidePanelAuth_initial' || sidePanel.className == ''
    ? (sidePanel.className = 'SidePanelAuth_dragged')
    : (sidePanel.className = 'SidePanelAuth_initial');
};

const AuthSidePanel = () => {
  const [authType, setauthType] = React.useState();

  return (
    <div>
      <div className="SidePanelAuth">
        <div id="AuthSidePanel"></div>
        <div
          id="rightleft"
          onClick={toggleExpandCollapseAuth}
          className="SidePanelAuth_initial"
        >
          <i className="bi bi-arrow-left-right"></i>
        </div>
        <section id="AuthBoard" className="AuthBoard_Collapsed">
          <select id="AuthorznType">
            <option value="Default" defaultValue="Authorization Type">
              Authorization Type
            </option>
            <option value="NoAuth">No Auth</option>
            <option value="OAuth1.0">OAuth1.0</option>
            <option value="OAuth2.0">OAuth2.0</option>
            <option value="APIKEY">APIKEY</option>
            <option value="BearerToken">Bearer Token</option>
          </select>

          <OAuth2Template />
        </section>
      </div>
    </div>
  );
};

export default AuthSidePanel;
