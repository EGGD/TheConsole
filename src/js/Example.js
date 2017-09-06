/**
 * Created by CL on 2017/9/4.
 */
import React, { Component } from 'react';
import '../css/basis.css';
import basis from '../js/basis';
var url = basis.webapi + 'api/user/GetUserList';
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {loginData: []};
        fetch(url).then(res => {
            //解析fetch请求返回的数据
            res.json().then(data => {
                this.setState({
                    loginData: data
                });
            })
        }).catch(err => {
            console.log(err);
        });
    }
    
    render() {
        let listdata = this.state.loginData.map((data, index) => {
            var temp= [];
            for (var name in data) {
                if(data[name]==null || data[name]==""){
                    continue
                }
                temp.push(<li>{name}:{data[name]}</li>)
            }
           return temp
        });
        return (
            <div>
                {listdata}
            </div>
        )
    }
}
export default Example;