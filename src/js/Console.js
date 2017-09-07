import React, {Component} from 'react';
import '../css/basis.css';
import basis from '../js/basis';
import Time from '../js/Time';

var number=0,historyLength;
class Console extends Component {
    constructor(props){
        super();
        this.state={
            consoleShow:[],
            history:[],
            time:new Date().toString()
        };
        this.addConsole=this.addConsole.bind(this);  
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
        // console.log(e.keyCode);
        if(e.keyCode===13){
            history.push(value)
            temp.push("[Q"+number+++"]"+value);
            e.target.value=""
            this.setState({
                consoleShow:temp
            })
            this.setState({
                history:history
            })
            basis.judgment(value,this)
            historyLength=this.state.history.length-1;
        }else if(e.keyCode===38){
            e.target.value=historyLength===0?this.state.history[historyLength]:this.state.history[historyLength--];
            e.preventDefault();
        }else if(e.keyCode===40){
            var length=this.state.history.length-1;
            e.target.value=historyLength===length?this.state.history[historyLength]:this.state.history[++historyLength];
            e.preventDefault();
        }else if(e.keyCode===8){
            historyLength=this.state.history.length-1;
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
               <span>></span><input id="setInput"  onKeyDown={this.addConsole} autoFocus type="text"/>
               <div></div>
            </div>
        )
    }
}
export default Console;