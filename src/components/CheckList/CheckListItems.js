import React from 'react';
import './CheckList.css';
const CheckListItems = () => {
  return (
    <div id="checklistItems">
      <div class="checkList">
        <h4>Url</h4>
        <h4>Expected Status Code</h4>
        <ul>
          Authentication Params
          <li>Authentication Type</li>
          <li>Is Token Defined?</li>
        </ul>
        <h4>Request Body</h4>
        <div>
          Response Body (Enable when at least on successful Call is made)
          <h4>Extract Variables</h4>
        </div>
      </div>
    </div>
  );
};

export default CheckListItems;
