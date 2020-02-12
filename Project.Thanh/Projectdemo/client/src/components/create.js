import React, {Component} from 'react';
import axios from 'axios';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            company: '',
            age:''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCompany(e) {
        this.setState({
            company: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            name: this.state.name,
            company: this.state.company,
            age: this.state.age
        };
        axios.post('http://localhost:4000/persons/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            company: '',
            age: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Thêm thông tin người dùng</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Họ và Tên: </label>
                        <input type="text" className="form-control"
                               value={this.state.name}
                               onChange={this.onChangeName}
                               placeholder="Nhập tên"
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Tên công ty: </label>
                        <input type="text" className="form-control" value={this.state.company}
                               onChange={this.onChangeCompany}
                               placeholder="Nhập tên công ty"
                               required/>
                    </div>
                    <div className="form-group">
                        <label>Tuổi: </label>
                        <input type="text" className="form-control" value={this.state.age}
                               onChange={this.onChangeAge} 
                               placeholder="Nhập tuổi"
                               required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Person" className="btn btn-warning"/>
                    </div>
                </form>
            </div>
        )
    }
}