import React, { Component } from 'react';
import HeadTitle from './HeadTitle';
import Patient from './Patient';

const axios =require('axios');
const getPatientData =() => axios.get('/view')
             .then ((res)=> res.data)
const addPatientAction=(ten,virus,condition)=>(
     axios.post('/add',{ten,virus,condition})
    .then((res)=>res.data));         

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:null, ten: '',
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
        this.setState({
          data:dataTemp
        });
        
    }
    
    
    addPatientAction(ten,virus,condition).then((resp)=>{
    })
}
  render(){  

  return (
    <div>
      <HeadTitle/>
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
                  <input onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="condition" id aria-describedby="helpId" placeholder="Dương tính/âm tính" />
                </div>
                <button type="reset" onClick={()=>this.handleClick()} className="btn btn-primary">Submit</button>
              </form>
        <div className="row alert alert-secondary" role="alert">
        <div className="col">Tên</div>
        <div className="col">Chủng Virus</div>
        <div className="col">Kết quả xét nghiệm</div>
        <div className="col">Action</div>
        </div>    
      {this.printData()}
      </div>
      

    </div>
  );
}
}

export default App;
