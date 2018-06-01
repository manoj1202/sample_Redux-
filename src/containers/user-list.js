import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser} from '../action/index';

class UserList extends Component{
    createListItem(){
       return this.props.users.map((user) => {
            return(
                <li key={user.id}>
                {user.first} {user.last} 
                </li>
            );
        });
    }
    render(){
        return(
            <ul>
                {this.createListItem()}
            </ul>
        );
    }
}
function mapStateToProps(state){
    return{
        users: state.users
    }
}

function matchDispatchToProps(dispatch){
        return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);