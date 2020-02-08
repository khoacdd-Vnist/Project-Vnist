import React, { Component } from 'react';
import { Link, useParams } from 'react-router-dom';

import callApi from '../apiCaller/apiCaller';


class Sua extends Component {

    constructor(props) {
        super(props);
        this.state = {
            _id: '',
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

    handleClick = (id)=>{
        var ten = this.state.ten;
        var tuoi = this.state.tuoi
        
        console.log(id);
        callApi('/sua.'+id, 'POST', {
            ten : ten,
            tuoi : tuoi
        }).then(res => {
            console.log(res);
            alert('Update Successfully!');
        })

    }

    componentDidMount() {
        // console.log(id);
        // console.log(this.props);
    }
    

    render() {
        const { params } = this.props.match;
        // console.log(this.props.match.params.id);
        // const {idsua} = this.props.children
        var idsua = this.props.match.params.idsua
        console.log('render');
        console.log(this.props.match.params.idsua);
        
        return (
            <div>
                <div>
                {/* Mast head */}
                <header className="masthead noidung">
                    <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-lg-10 align-self-end">
                        <h1 className="text-uppercase text-white font-weight-bold">Update information</h1>
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
                    <h1 className="display-3"><img src="https://www.venicegov.com/Home/ShowPublishedImage/2219/636483247689700000" alt="for update" /></h1>
                    <p className="lead">Update members information in the following form</p>
                    <hr className="my-2" />
                    </div>
                    {/* action={"/sua." + this.props.idsua} method="post" */}
                    <form >
                    <div className="form-group">
                        <label htmlFor="ten">Name</label>
                        <input onChange = {(event)=>this.isChange(event)} type="text" className="form-control" name="ten" id="ten" aria-describedby="helpId" placeholder required />
                        <small id="helpId" className="form-text text-muted">Enter your name here</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tuoi">Age</label>
                        <input onChange = {(event)=>this.isChange(event)} type="text" className="form-control" name="tuoi" id="tuoi" aria-describedby="helpId" placeholder required />
                        <small id="helpId" className="form-text text-muted">Enter your age here</small>
                    </div>

                    <Link to = "/xem"><button type="reset" onClick = {()=>this.handleClick(idsua)} className="btn btn-primary btn-info">Submit</button></Link>

                    <button type="reset" className="btn btn-primary" >Reset</button>
                    
                    </form>
                    <Link to="/xem"><label htmlFor><small><i>View info --></i></small></label></Link>
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

export default Sua;