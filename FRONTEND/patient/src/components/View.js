import React, { Component } from 'react';
import HeadTitle from './HeadTitle';
import Patient from   './Patient';

const axios = require('axios');
const getPatientData =() => axios.get('view').then(res=>res.data);



class View extends Component {
    constructor(props){
        super(props);
        this.state={
            data:null,
            ten:'',
            virus:'',
            condition:''
        }
    }

    componentWillMount(){
        if(this.state.data === null){
         getPatientData().then((res)=>{
           this.setState({
             data:res
           });
         })
        }
    }
    
    //ham in du lieu
  printData =()=>{
    if(this.state.data !== null){
      return this.state.data.map((value,key)=>{
        return (<Patient 
         key={key}
         ten={value.ten}
         virus={value.virus}
         condition ={value.condition}
        />)
        
      })
    }
  }



    render() {
        return (
            <div>
                <div className="row alert alert-secondary" role="alert">
        <div className="col">Tên</div>
        <div className="col">Chủng Virus</div>
        <div className="col">Kết quả xét nghiệm</div>
        <div className="col">Action</div>
        </div>    
      {this.printData()}
      </div>
        );
    }
}

export default View;