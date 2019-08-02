import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getAuthUser} from "../actions/playerAction";

class LoginView extends Component {
    constructor(props){
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPass = this.onChangeUserPass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            user_name: '',
            user_pass: '',
            setOpen: false,
            open: false
        }
    }

    onChangeUserName(event){
        this.setState({
            user_name: event.target.value
        })
    }

    onChangeUserPass(event){
        this.setState({
            user_pass: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const user = {
            user_name: this.state.user_name,
            user_pass: this.state.user_pass
        }
        this.props.getAuthUser(user)
        this.setState({
            user_name: '',
            user_pass: ''
        })
    }

    render() {
        return(
            <div style={{marginTop:20}} className="container">
                <h3>Log In</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="User Name"
                            value={this.state.user_name}
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Ener password"
                            value={this.state.user_pass}
                            onChange={this.onChangeUserPass}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Log In" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAuthUser: (user) => dispatch(getAuthUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginView)
