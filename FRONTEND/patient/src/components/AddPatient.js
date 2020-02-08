import React, { Component } from 'react';
import axios from 'axios';
const addProductAction=(ten,virus,condition)=>{
    return axios.post('/add',{ten,virus,condition})
    .then((res)=>res.data)
}
class AddPatient extends Component {
    constructor(props){
        super(props);
        this.state ={
            ten: '',
            virus:'',
            condition:'',
        }
    }

    isChange =(event)=>{
        var name   = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    handleClick=()=>{
        var{ten,virus,condition} =this.state;
        var dataTemp = {};
        var item = {};
        item.ten = this.state.ten;
        item.virus=this.state.virus;
        item.condition=this.state.condition;

        dataTemp =this.state.data;
        
        if(item.ten !== ''){
            dataTemp.push(item);
            
        }
        console.log(dataTemp);
        
        
        addProductAction(ten,virus,condition).then((resp)=>{
            console.log(resp);
        })
    }

    render() {
        return (
            <div className="container">
            <div className="jumbotron">
              <h1 className="display-3">Quản lý xét nghiệm</h1>
              <p className="lead">MongoDB</p>
              <hr className="my-2" />
              
            </div>
          </div>
          
        );
    }
}

export default AddPatient;