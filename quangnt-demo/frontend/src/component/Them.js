import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import callApi from './../apiCaller/apiCaller';


class Them extends Component {

    constructor(props) {
        super(props);
        this.state = {//cac thuoc tinh cua trang thai phai giong voi cac ten cua cac form input
            _id:'',
            ten: '',
            tuoi: null
        };
    }
    
    isChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        console.log(name);
        console.log(value);
        this.setState({
            [name]: value
        });
    }

    handleClick = ()=>{
        // var ten = this.state.ten;
        // var tuoi = this.state.tuoi
        
        console.log(JSON.stringify(this.state));

        callApi('/them', 'POST', {
            ten : this.state.ten,
            tuoi : this.state.tuoi
        }).then(res => {
            console.log(res);
            alert('Add Successfully!');
        })
       
    }

    render() {
        var {ten, tuoi} = this.state;
        return (
            <div>
                <div>
                    <header className="masthead noidung">
                        <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                            <h1 className="text-uppercase text-white font-weight-bold">Add Member information</h1>
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
                        <h1 className="display-3"><img src="https://quatangabc.com/vnt_upload/product/03_2018/07.gif" alt="for update" />
                        </h1>
                        <p className="lead">Add members information in the following form</p>
                        <hr className="my-2" />
                        </div>
                        <form>
                        <div className="form-group">
                            <label htmlFor="ten">Name</label>
                            <input value = {ten} onChange = {(event)=>this.isChange(event)} type="text" className="form-control" name="ten" id="ten" aria-describedby="helpId"  required />
                            <small id="helpId" className="form-text text-muted">Enter your name here</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="tuoi">Age</label>
                            <input value = {tuoi} onChange = {(event)=>this.isChange(event)} type="text" className="form-control" name="tuoi" id="tuoi" aria-describedby="helpId"  required />
                            <small id="helpId" className="form-text text-muted">Enter your age here</small>
                        </div>
                        <hr/>
                        <Link to = "/xem"><button type="submit" onClick = {()=>this.handleClick()} className="btn btn-primary btn-info">Submit</button></Link>
                        {/* onClick = {()=>this.handleClick()} */}
                        <button type="reset" className="btn btn-primary" >Reset</button>
                        
                        
                        </form>
                        <Link to="/xem" className="text-center"><label htmlFor><small><i>View info --></i></small></label></Link>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                </div>

            </div>
        );
    }
}

export default Them;