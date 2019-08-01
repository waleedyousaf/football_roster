import React, {Component} from 'react'
// import axios from 'axios'
//import {Link} from 'react-router-dom'
//import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'
import {postPlayer, postUser} from "../actions/playerAction";

class SignUpView extends Component {
    constructor(props){
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPass = this.onChangeUserPass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_name: '',
            user_pass: ''
        }
    }

    onChangeUserName(e){
        // console.log("In OnChangePlayerName")
        // console.log("State: ",this.props.state)
        this.setState({
            user_name: e.target.value
        })
    }

    onChangeUserPass(e){
        // console.log("In OnChangePlayerBio")
        // console.log("State: ",this.props.state)
        this.setState({
            user_pass: e.target.value
        })
    }

    //without standards of v4
    myUuidGenerator() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

    onSubmit(e) {
        e.preventDefault();

        // console.log("In onSubmit start - state is: ",this.props.state)
        // console.log(`Form submitted:`);
        // console.log(`Player Name: ${this.state.player_name}`);
        // console.log(`Player Bio: ${this.state.player_bio}`);
        // console.log(`Player Priority: ${this.state.player_priority}`);
        // console.log(`Player Completed: ${this.state.player_completed}`);

        const newUser = {
            user_name: this.state.user_name,
            user_pass: this.state.user_pass
        }


        //console.log("Before dispathing from onclick")
        // console.log(newPlayer)


        //console.log("State before calling dispatch: ", this.props.state)
        this.props.postUser(newUser)

        //console.log("Before dispathing from onclick")

        // axios.post('http://localhost:3005/api/players', newPlayer)
        //     .then(resp => console.log(resp.data))



        this.setState({
            user_name: '',
            user_pass: ''
        })
    }

    render() {
        return(
            <div style={{marginTop:20}} className="container">
                <h3>Sign Up</h3>
                <form onSubmit={this.onSubmit}>
                    {/*<form>*/}
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="User Name"
                            value={this.state.user_name} //from [https://www.youtube.com/watch?v=qvBZevK1HPo] at 50 min
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
                        <input type="submit" value="Sign Up" className="btn btn-primary" />
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
    postUser: (newUser) => dispatch(postUser(newUser))
})

// export default AddPlayerView
export default connect(mapStateToProps,mapDispatchToProps)(SignUpView)
