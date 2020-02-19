import React, { Component } from 'react';
import axios from 'axios';

const addPatientAction=(ten,virus,condition)=>{
    return axios.post('/add',{ten,virus,condition})
    .then((res)=>res.data)
}
class AddPatient extends Component {
    constructor(props){
        super(props);
        this.state ={
            data:null,
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
        var dataTemp = {
            name:this.state.ten,
            virus:this.state.virus,
            condition:this.state.condition
        };
        if(dataTemp.name !== null)
        {
            addPatientAction(ten,virus,condition).then((resp)=>{  
            })
        }

        
        
        
    }

    render() {
        return (
            <div className="container">
            <form >
                <div className="form-group">
                  <label htmlFor="ten">Tên</label>
                  <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="ten" id aria-describedby="helpId" placeholder="Nhập Tên" />
                </div>
                <div className="form-group">
                  <label htmlFor="virus">Tên virus</label>
                  <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="virus" id aria-describedby="helpId" placeholder="Nhập tên virus" />
                </div>
                <div className="form-group">
                  <label htmlFor="condition">Trạng thái</label>
                  <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="condition" id aria-describedby="helpId" placeholder="Dương tính/Âm tính" />
                </div>
                <button type="reset" onClick={()=>this.handleClick()} className="btn btn-primary">Submit</button>
              </form>
          </div>
          
        );
    }
}

export default AddPatient;