
import React from 'react';
import './editorStyler.css';
import Draggable from 'react-draggable';
class DraggableLeftNav extends React.Component {
    handleEvent = (e, data) => {
        console.log('Event Type', e.type);
        console.log(e, data);
      }
    render() {
      return (
        <DocItem>
          <div >
            <img></img>
          </div>
        </DocItem>
      );
    }
  }
  
  export default DraggableLeftNav;


