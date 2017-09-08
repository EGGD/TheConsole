import React, {Component} from 'react';
import '../css/basis.css';
import basis from '../js/basis';
import Time from '../js/Time';


var number=0,historyLength,heightSrcollTop;
class Console extends Component {
    constructor(props){
        super();
        this.state={
            consoleShow:[],
            history:[],
            time:new Date().toString(),
            rotateSpan:true,
            tfTiming:true,
        };
        this.addConsole=this.addConsole.bind(this);  
        var that=this;
        setInterval(()=>{
            that.setState({
                time:new Date().toString()
            })
        },1000)
        document.getElementsByTagName("body")[0].onscroll=function(){
            //判断滚动条是否在底部 不是的话就删掉滚动条的置底事件
            if(heightSrcollTop>document.body.scrollTop){
                that.setState({
                    tfTiming:false
                })
            }
        }
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
                rotateSpan:false,
                tfTiming:true,
                consoleShow:temp,
                history:history
            })
            basis.judgment(value,this)
            historyLength=this.state.history.length-1;
            
        }else if(e.keyCode===38){
            if(historyLength===undefined) return
            e.target.value=historyLength===0?this.state.history[historyLength]:this.state.history[historyLength--];
            e.preventDefault();
        }else if(e.keyCode===40){
            if(historyLength===undefined) return            
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
    onTimeSrollTo(tf){
        if(tf){
            setTimeout(function () {
                window.scrollTo(0, window.screen.availHeight);
            },0);
        }
        heightSrcollTop=document.body.scrollTop;
    }
    render(){
        let list=this.state.consoleShow.map((value,index)=>{
            return(
                <div key={index}> {value}</div>
            )
        })
        this.onTimeSrollTo(this.state.tfTiming)
        let showspan;
        if(this.state.rotateSpan){
            showspan=<span id="rotateSpan">ノ</span>
        }else{
            showspan=<span id="rotateSpan">ㄨ</span>
        }
        return (
            <div>
               <Time data={this.state.time}/>
               {list}
               {showspan}
               <span> ></span><input id="setInput"  onKeyDown={this.addConsole} autoFocus type="text"/>
               <div></div>
            </div>
        )
    }
}
export default Console;