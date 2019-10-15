import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../Redux/headerReducer'


class Users extends Component {
    componentDidMount() {
        this.props.getUsers()
    }
    componentDidUpdate(prevProps) {
        if (prevProps.id !== this.props.id) {
            this.props.getUsers()
        }
    }
    render() {
        return (
            <>
                <table border="1">
                    <caption>Users</caption>
                    <tr>
                        <th>Number</th>
                        <th>Users</th>
                    </tr>
                    {this.props.users.map(el => {
                        return <tr><td>{el.id}</td><td>{el.name}</td></tr>
                    })}

                </table>
            </>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.header.users,
        id: state.header.id
    }
}
export default connect(mapStateToProps, { getUsers })(Users);