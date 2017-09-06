import React, {Component} from 'react';
import '../css/basis.css';
import basis from '../js/basis';
import Time from '../js/Time';

var number=0;
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
        var history=this.state.history;
        var value=e.target.value;
        if(e.keyCode===13){
            history.push("[Q"+number+"]"+value)
            temp.push("[Q"+number+++"]"+value);
            e.target.value=""
            this.setState({
                consoleShow:temp
            })
            this.setState({
                history:history
            })
            basis.judgment(value,this)
        };
    }
    clear(){
        this.setState({
            consoleShow:[]
        })
    }

    render(){
        let list=this.state.consoleShow.map((value,index)=>{
            return(
                <div key={index}> {value}</div>
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