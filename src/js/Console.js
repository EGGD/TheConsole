import React, {Component} from 'react';
import '../css/basis.css';
import basis from '../js/basis';
import Time from '../js/Time';


class Console extends Component {
    constructor(props){
        super();
        this.state={
            consoleShow:[],
            history:[],
            time:new Date().toString()
        };
        var that=this;
        setInterval(()=>{
            that.setState({
                time:new Date().toString()
            })
        },1000)
    }
    addConsole(e){
        var temp=this.state.consoleShow;
        if(e.keyCode==13){
            temp.push(e.target.value)
            e.target.value=""
            this.setState({
                consoleShow:temp
            })
        };

    }

    render(){
        let list=this.state.consoleShow.map((value,index)=>{
            return(
                <div>[Q{index}]  {value}</div>
            )
        })
        return (
            <div>
               <Time data={this.state.time}/>
               {list}
               
               <span>></span><input id="setInput" onKeyDown={this.addConsole.bind(this)} autoFocus type="text"/>
            </div>
        )
    }
}
export default Console;