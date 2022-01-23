import React, { useEffect, useState } from 'react';
import './pathExtractor.css';

const PathExtractor = (props) => {
  var names, extractedValue;

  const [evaluatedValue, setevaluatedValue] = useState();

  const [extracted, setextracted] = useState([{}]);

  const extractHandler = (e) => {
    console.log('API response data', props.receivedResponse);
    var jp = require('jsonpath');
    console.log('Extracting Data', e.target.value);
    names = jp.query(props.receivedResponse, e.target.value);
    setextracted(names);
  };
  //setevaluatedValue(names);

  return (
    <div id="path_Extractor_section" className="path_Extractor_collapsed">
      <div>
        <input
          id="queryInput"
          placeholder="Enter json path"
          type="text"
          onChange={extractHandler}
        />
        <img id="exportasVariable"></img>

        <div id="evaluatedPath">
          <pre>{JSON.stringify(extracted, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default PathExtractor;
