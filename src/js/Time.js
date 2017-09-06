import React, {Component} from 'react';


class Time extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div>
                欢迎您的到来 现在的时间为:    
                </div>
                { this.props.data}
            </div>
        )
    }
}
export default Time;