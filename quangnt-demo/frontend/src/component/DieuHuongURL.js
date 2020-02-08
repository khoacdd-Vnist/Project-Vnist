import React, { Component } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from './Home';
import Xem from './Xem';
import Sua from './Sua';
import Them from './Them';




class DieuHuongURL extends Component {
    render() {
        
        return (
            // <Router>
                <div>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/sua.:idsua?" component={Sua} />
                        <Route path="/xem" component={Xem} />
                        <Route path="/them" component={Them} />
                    </Switch>
                    
                </div>
            // </Router>   
        );
    }
}

export default DieuHuongURL;