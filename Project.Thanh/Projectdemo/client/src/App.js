import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create';
import Edit from './components/edit';
import Index from './components';
import Home from './components/Home'
import Test from './components/test'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Trang Chủ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">Thêm dữ liệu</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/index'} className="nav-link">Index</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> <br/>
                    <h2>Test</h2> <br/>
                    <hr />
                    <Switch>
                        
                        <Route exact path='/'component={Home} />
                        <Route  path='/create' component={ Create } />
                        <Route path='/edit/:id' component={ Edit } />
                        <Route path='/index' component={ Index } />
                        { <Route path='/tdz3009' component={Test} /> }
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
