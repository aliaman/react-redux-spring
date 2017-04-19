import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from './../redux/actions/userActions'

@connect((store) => {
    return {
        users: store.user.users
    }
})
export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.dispatch(fetchUsers());
    }
    render() {
        const userlist = this.props.users.map(function(user){
           return (
               <li key={Math.random()}>{user.name} - {user.salary}</li>
           )
        });
        return (
            <div style={{textAlign: 'left'}}>
                <h1>Hello World!!!</h1>
                <ul>
                    {userlist}
                </ul>
            </div>);
    }
}
