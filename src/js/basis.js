
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
        //随机数
        value=value.split(" ")[1];
        value?temp.push(parseInt(Math.random()*value+1)):temp.push('miss');
        tempPush(that,temp)
    }else if(value.split(" ")[0]==="F"){
        //翻译
        value=value.split(" ")[1]
        var url='http://xtk.azurewebsites.net/BingDictService.aspx?Word='+value;
        fetch('http://127.0.0.1:3000/post').then(res=>{
            console.log("Response succeeded?", JSON.stringify(res.ok));
            console.log(JSON.stringify(res));
            // res.json().then(data=>{
            //     console.log(data);
            // })
        })
    }else if(value==="history"){
        //历史
        temp=temp.concat(stringHistory,history,['-----------------------'])
        tempPush(that,temp)
    }else if(parseFloat(value).toString()!=="NaN"){
        //数字
        temp.push(value)
        tempPush(that,temp)
    }else{
        //不存在
        temp.push('miss')
        tempPush(that,temp)
    }
}
function tempPush(that,value){
    that.setState({
        consoleShow:value
    });
}

