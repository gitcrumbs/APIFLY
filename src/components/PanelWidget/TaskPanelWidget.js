import React from 'react';
import Draggable from 'react-draggable';
import './TaskWidget.css'


const togglecollapseexpand = (e) => {
    var element = document.getElementById("helper_panel");
    var collapsedicon = document.getElementById("expand_icon");
    var icons = document.querySelectorAll(".task_icons_setup");
    var str = String(element.className).toLowerCase();
    let found = '';
    let regex = '';

    regex = /panel_expanded/g;
    found = str.match(regex);

    if (found == null) {
        regex = /panel_collapsed/g;
        found = str.match(regex);
    }

    if (found[0] == "panel_expanded") {

        element.classList.remove("panel_expanded")
        element.classList.add("panel_collapsed")         
        collapsedicon.style.display = "none"

        icons.forEach((elem)=>{
            elem.style.display = "none"
            elem.classList.remove("animated")
            elem.classList.remove("bounce")
        })

    } else if (found[0] == "panel_collapsed") {
        element.classList.remove("panel_collapsed")
        element.classList.add("panel_expanded")      
        collapsedicon.style.display = "block"
        icons.forEach((elem)=>{
            elem.style.display = "block"
        })

    }



    //panelelement.toggleAttribute.className="panel_expanded";
    // panelelement.className="panel_collapsed";
}

const isInViewport = () => {
    const elementposition = {
        x: '',
        y: ''
    };
    const box = document.querySelector('#helper_panel');
    const rect = box.getBoundingClientRect();
    const root = document.getElementById("root-container");
    const viewport = root.getBoundingClientRect()
    console.log(`The Toggle icon is at x : ${rect.x}, y: ${rect.y}`, rect);
    elementposition.x = rect.x;
    elementposition.y = rect.y;
    console.log("The Current viewport is in ", viewport);
    console.log("Type of coor x is", typeof (elementposition.x));

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;

    console.log(`Center of the screen is  at:${x}, ${y}`);

    console.log("What mode to display", whichModetoDisplay(elementposition));
}




   





const animateIconOnClick =(e)=>{
  
    console.log(e.classList)
    e.target.classList.add("animated");
    e.target.classList.add("bounce");
   
}


const whichModetoDisplay = (elementposition) => {
    let initialloc = "";
    const { x, y } = elementposition;
    console.log(`Element Position is :${x} ,${y}`);
    if ((x > -5 && x <= 450)) {
        console.log(`Element Position is :${x} ,${y} : Evaluated as Left`);
        initialloc = "left"

        if (y > -5 && y < 215) {
            initialloc = "left" + "-top"
        } else if (y > 215.5 && y < 430) {
            initialloc = initialloc
        } else if (y > 430.1 && y < 657) {
            initialloc = initialloc + "-bottom"
        }

        return initialloc

    }

    if ((x >= 450.1 && x <= 813)) {
        console.log(`Element Position is :${x} ,${y} : Evaluated as Center`);
        initialloc = "center"
        if (y > -5 && y < 215) {
            initialloc = "left" + "-top"
        } else if (y > 215.5 && y < 430) {
            initialloc = initialloc
        } else if (y > 430.1 && y < 657) {
            initialloc = initialloc + "-bottom"
        }
        return initialloc;
    }

    if ((x >= 813.5 && x <= 1366)) {
        console.log(`Element Position is :${x} ,${y} : Evaluated as right`);
        initialloc = "right";
        if (y > -5 && y < 215) {
            initialloc = initialloc + "-top"
        } else if (y > 215.5 && y < 430) {
            initialloc = initialloc
        } else if (y > 430.1 && y < 657) {
            initialloc = initialloc + "-bottom"
        }
        return initialloc;
    }





}

export const TaskPanelWidget = () => {

    const handleEvent = ((e, data) => {
        console.log('Event Type', e.type);
        console.log(e, data);
        var element = document.getElementById("helper_panel");


        element.addEventListener("transitionend", isInViewport());
    });




    return (

        <div>


            <Draggable
                onDrag={handleEvent}
                onStart={handleEvent}
                onStop={handleEvent}
                onMouseDown={handleEvent}
                onMouseUp={handleEvent}
                onTouchStart={handleEvent}
                onTouchEnd={handleEvent}
            >

                <div>
                    <div id="helper_panel" className="panel_expanded rotate">

                        <div className="task_icons line" onClick={togglecollapseexpand} onDoubleClick={togglecollapseexpand} id="taskbar_icon"></div>

                        <div className="task_icons_setup line" onClick={animateIconOnClick} id="taskbar_icon_edit"></div>
                        <div className="task_icons_setup line" onClick={animateIconOnClick} id="taskbar_icon_settings"></div>
                        <div className="task_icons_setup line" onClick={animateIconOnClick} id="taskbar_icon_Launch"></div>
                        <div className="task_icons_setup line" onClick={animateIconOnClick} id="taskbar_icon_search"></div>
                        <div className="task_icons_setup line" onClick={animateIconOnClick} id="taskbar_icon_folders"></div>
                        <div className="task_icons_setup line" onClick={animateIconOnClick}  id="taskbar_icon_links"></div>
                        <div className="task_icons_setup line" onClick={animateIconOnClick}  id="taskbar_icon_delete"></div>
                       
                           
                        <div className="expand line" onClick={togglecollapseexpand} id="expand_icon"></div>
                    </div>
                </div>


            </Draggable>


        </div>



    )

};

export default TaskPanelWidget;
