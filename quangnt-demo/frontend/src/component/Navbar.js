import React, { Component } from 'react';

import {
    Link
} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
       
                <nav style={{backgroundColor: '#0fabbc'}} className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container">
                        <Link className="navbar-brand js-scroll-trigger" to="/">TheLight</Link>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item">
                            <Link to="/them" className="nav-link js-scroll-trigger">Add member</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/xem" className="nav-link js-scroll-trigger">Manage info</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>

        
                
            </div>
        );
    }
}

export default Navbar;