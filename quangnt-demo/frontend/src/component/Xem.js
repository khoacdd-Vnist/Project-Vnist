import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import data from './Data.json';
import callApi from './../apiCaller/apiCaller'
// import data from 'http://localhost:1704/xem';

// const axios = require('axios').default;


class Xem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dl : []
        }
    }

    confirmAssign = (tinnhan) => {
        if(confirm(tinnhan) === true){//eslint-disable-line
            return true;
        } return false;
    }

    handleDelete = (id)=>{
        var {dl} = this.state;
        if(confirm('Ban co chac chan muon xoa hay khong?')){//eslint-disable-line
            console.log(id);
            callApi('/xoa.'+id, 'GET', null).then(res => {
                console.log(res);
                if(res.status === 200){//OK
                    var index = this.findIndex(dl, id);
                    if(index !== -1) {
                        dl.splice(index, 1);
                        this.setState({
                            dl : dl,
                        });
                    }
                }
            })
        }
    }

    findIndex = (data, id) => {
        var result = -1;
        data.forEach((element, index) => {
            if(element._id === id){
                result = index;
            }
        });
        return result;
    }

    componentDidMount() {
        console.log('componentDidMount');
        callApi('/xem', 'GET', null).then(response => {
            console.log( response);
            this.setState({
                dl : response.data,
            });
        })
    }
    

    render() {
        console.log("render trang /xem");
        
        return (
            <div>
                <div>
                {/* Mast head */}
                <header className="masthead noidung">
                    <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">View information</h1>
                        <hr className="divider my-4" />
                        </div>
                        <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 font-weight-light mb-5" />
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin content Section */}
                <div className="container">
                    <div className="jumbotron text-center" style={{backgroundColor: 'white'}}>
                    <h1 className="display-3"><img src="https://keydifferences.com/wp-content/uploads/2016/09/data-vs-informaton.jpg" alt="for view info" /></h1>
                    <p className="lead">View member information here</p>
                    <hr className="my-2" />
                    </div>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    
                    <table className="table table-striped table-bordered table-hover table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                        <th> Name </th>
                        <th> Age </th>
                        <th> Options </th>
                        </tr>
                    </thead>
                        <tbody>
        
                        {this.state.dl.map(eachData => {
                            return (
                                <tr>
                                    <td>{eachData.ten}</td>
                                    <td>{eachData.tuoi}</td>
                                    <td><Link to={"/sua." + eachData._id}>Sửa</Link> / <Link  onClick = {()=>this.handleDelete(eachData._id)}>Xóa</Link></td>
                                </tr>
                            )}
                        )}     
                            
                        </tbody>
                    </table>
                    <Link to="/them">
                    <button type="button" name id className="btn btn-block btn-primary" btn-lg btn-block>Thêm dữ liệu</button>
                    </Link>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                {/* Optional JavaScript */}
                {/* jQuery first, then Popper.js, then Bootstrap JS */}
            </div>

        </div>
        );
    }
}

export default Xem;