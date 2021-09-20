import React from 'react';
import ReactDOM from 'react-dom';
import APIHandler from './components/executionHandler/APIHandler';
import RequestTabs from './components/executionHandler/RequestTabs';
import Header from './components/LandingPage/Header'
import TokenHandler from './components/executionHandler/TokenHandler';
import LeftNavigation from './components/fileExplorer/LeftNavigation'
import ResponseBodyHandler from './components/executionHandler/ResponseBodyHandler'
import 'bootstrap/dist/css/bootstrap.min.css';
import './appstyler.css';
import RequestFactory from './components/apiFactory/RequestFactory';
import DraggableLeftNav from '../src/components/playground/DraggableLeftNav'


class BumbleBee extends React.Component {


        render() {
                return (

                        <div id="root-container">

                      
                                <DraggableLeftNav/>
                        </div>

                )
        }
}




ReactDOM.render(<BumbleBee />, document.getElementById("app"))