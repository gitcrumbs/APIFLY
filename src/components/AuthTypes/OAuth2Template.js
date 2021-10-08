import React from 'react';
import InclusionTable from '../executionHandler/InclusionTable';
const OAuth2Template = () => {
  return (
    <div>
      <div id="AuthUrl">
        <div>
          <input
            className="Url_InputField"
            placeholder="Authorization Url"
            type="text"
          />
        </div>

        <div>
          <input
            className="Url_InputField"
            placeholder="Redirect Url"
            type="text"
          />
        </div>
      </div>

      {true && (
        <fieldset id="AuthUsageIn">
          <legend>Use Authorization in</legend>
          <div>
            <input
              type="radio"
              name="format"
              id="Authreq_url"
              value="requrl"
              checked
            />
            <label htmlFor="url">Request URL</label>
          </div>
          <div>
            <input
              type="radio"
              name="format"
              id="Authreq_body"
              value="reqbody"
            />
            <label htmlFor="reqbody">Request Body</label>
          </div>
        </fieldset>
      )}

      <InclusionTable />
    </div>
  );
};

export default OAuth2Template;
