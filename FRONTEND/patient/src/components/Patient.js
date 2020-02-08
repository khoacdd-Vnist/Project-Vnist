import React, { Component } from 'react';

class Patient extends Component {
    render() {
        return (
            <div className="row alert alert-primary" role="alert">
  <div className="col">{this.props.ten}</div>
  <div className="col">{this.props.virus}</div>
  <div className="col">{this.props.condition}</div>
  <div className="col">Action</div>
</div>


        );
    }
}

export default Patient;