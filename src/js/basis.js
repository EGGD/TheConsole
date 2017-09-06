
export default  {
    webapi: "http://192.168.0.207:8097/",
    judgment:judgment,
}
function judgment(value,that){
    var temp=that.state.consoleShow,
        history=that.state.history;
    var stringHistory=[
        '-----------------------',
        'History total  '+history.length,
        '-----------------------',
    ];
    if(value==="clear"){
        that.clear();
    }else if(value.split(" ")[0]==="random"){
        value=value.split(" ")[1];
        value?temp.push(parseInt(Math.random()*value+1)):temp.push('miss');
        tempPush(that,temp)
    }
    else if(value==="history"){
        temp=temp.concat(stringHistory,history,['-----------------------'])
        tempPush(that,temp)
    }else if(parseFloat(value).toString()!=="NaN"){
        temp.push(value)
        tempPush(that,temp)
    }else{
        temp.push('miss')
        tempPush(that,temp)
    }
}
function tempPush(that,value){
    that.setState({
        consoleShow:value
    });
}