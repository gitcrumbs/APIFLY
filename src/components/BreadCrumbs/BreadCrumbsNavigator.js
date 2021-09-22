import React from 'react';
import './BreadCrumbs.css'


var breadCrumbs_container = document.querySelectorAll("#columns");
var dragSrcEl = null;
function handleDragStart(e) {
    console.log("Drag Start",e.target.text);
    dragSrcEl = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text', e.target.text);
  }
    
    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
      }
    
      e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    
      return false;
    }
    
    function handleDragEnter(e) {
      // this / e.target is the current hover target.
      e.target.classList.add('over');
    }
    
    function handleDragLeave(e) {
        e.target.classList.remove('over');  // this / e.target is previous target element.
    }      
  
  
    function handleDrop(e) {
      if (e.stopPropagation) {
          e.stopPropagation(); // Stops some browsers from redirecting.
        }
      console.log("Drage Source element",dragSrcEl);
      console.log("Target  element",e.target);
        // Don't do anything if dropping the same column we're dragging.
        if (dragSrcEl != e.target) {
          // Set the source column's HTML to the HTML of the column we dropped on.
          dragSrcEl.text = e.target.text;
          e.target.text = e.dataTransfer.getData('text');
        }
      
        return false;
      
    }
    
    function handleDragEnd(e) {
        // this/e.target is the source node.
        var cols = document.querySelectorAll('#columns .column');
        console.log("columns",cols);
      [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragenter', handleDragEnter, false)
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
        col.addEventListener('dragend', handleDragEnd, false);
      });
        [].forEach.call(cols, function (col) {
          col.classList.remove('over');
        });
      }
      
    
    
  

const BreadCrumbsNavigator = () => {  
    
   
    return (
        <div id="breadCrumbs_container">
            <div id="columns" className="breadcrumb flat">
                <a draggable={true} className="column" onDragEnd={handleDragEnd} onDrop={handleDrop} onDragLeave={handleDragLeave} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={handleDragOver}  >Browse</a>
                <a draggable={true} className="column" onDragEnd={handleDragEnd} onDrop={handleDrop} onDragLeave={handleDragLeave} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={handleDragOver}>Compare</a>
                <a draggable={true} className="column" onDragEnd={handleDragEnd} onDrop={handleDrop} onDragLeave={handleDragLeave} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={handleDragOver}>Order Confirmation</a>
                <a draggable={true} className="column" onDragEnd={handleDragEnd} onDrop={handleDrop} onDragLeave={handleDragLeave} onDragStart={handleDragStart} onDragEnter={handleDragEnter} onDragOver={handleDragOver}>Checkout</a>
            </div>

        </div>
    );


}

export default BreadCrumbsNavigator