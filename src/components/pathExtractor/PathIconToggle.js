import React from 'react';
import './pathExtractor.css';

const extractHandler = () => {
  var itemboard = document.getElementById('path_Extractor_section');
  console.log('Child Nodes of Extract board', itemboard.childNodes);
  itemboard.className == 'path_Extractor_collapsed' || itemboard.className == ''
    ? (itemboard.className = 'path_Extractor_enabled')
    : (itemboard.className = 'path_Extractor_collapsed');
};
const PathIconToggle = () => {
  return (
    <div onClick={extractHandler}>
      <img id="path_Extractor" className="path_extractor"></img>
    </div>
  );
};

export default PathIconToggle;
