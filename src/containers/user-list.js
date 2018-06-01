import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class UserList extends Component{
    createListItem(){
       return this.props.users.map((user) => {
            return(
                <li>{user.first} {user.last} </li>
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

export default connect(mapStateToProps)(UserList);