/**
 * Created by CL on 2017/9/4.
 */
import React, {Component} from 'react';
class ListData extends Component {
    render() {
        let listdata = this.props.data.map((value, index) => {
            return (
                <li key={index}>{value.id}</li>
            );
        });
        return (
            <ul>
                {listdata}
            </ul>
        )
    }
}
export default ListData;