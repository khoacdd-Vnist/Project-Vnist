import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div className="container">
                <h4>Vertical Form</h4>
                <form action>
                    <div className="form-group">
                        <label >User Name</label>
                        <input className="form-control" type="text"  placeholder="Enter your User Name" />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input className="form-control" type="password" placeholder="Enter your password" />
                    </div>
                    <div className="container">
                        <button type="button" className="btn btn-success">Login</button>
                        <button type="button" className="btn btn-secondary">Register</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Test;