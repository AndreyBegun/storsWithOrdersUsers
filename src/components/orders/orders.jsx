import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getOrders} from '../Redux/headerReducer'

class Orders extends Component {
    componentDidMount() {
        this.props.getOrders()
    }
    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            this.props.getOrders()
        }
    }
    render() {
        return (
            <>
                <table border="1">
                    <caption>Orders on months</caption>
                    <tr>
                        <th>Months</th>
                        <th>Orders</th>

                    </tr>
                    {this.props.orders.map(el=>{
                        return <tr><td>{el.month}</td><td>{el.orders}</td></tr>
                    })}
                </table>
            </>
        );
    }
}
let mapStateToProps=(state)=>{
    return {
        orders: state.header.orders,
        id: state.header.id
    }
}

export default connect(mapStateToProps,{getOrders})(Orders);