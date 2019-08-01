import React, {Component} from 'react'
// import axios from 'axios'
//import {Link} from 'react-router-dom'
//import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'
import {postPlayer} from "../actions/playerAction";
import Button from "react-bootstrap/Button";
import authAction from "../actions/authAction";


class AddPlayerView extends Component {
    constructor(props){
        super(props);

        this.onChangePlayerName = this.onChangePlayerName.bind(this);
        this.onChangePlayerBio = this.onChangePlayerBio.bind(this);
        this.onChangePlayerPriority = this.onChangePlayerPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            player_name: '',
            player_bio: '',
            player_priority: '',
            player_completed: false
        }
    }

    onChangePlayerName(e){
        // console.log("In OnChangePlayerName")
        // console.log("State: ",this.props.state)
        this.setState({
            player_name: e.target.value
        })
    }

    onChangePlayerBio(e){
        // console.log("In OnChangePlayerBio")
        // console.log("State: ",this.props.state)
        this.setState({
            player_bio: e.target.value
        })
    }

    onChangePlayerPriority(e){
        this.setState({
            player_priority: e.target.value
        })
    }


    onSubmit(e) {
        e.preventDefault();

        // console.log("In onSubmit start - state is: ",this.props.state)
        // console.log(`Form submitted:`);
        // console.log(`Player Name: ${this.state.player_name}`);
        // console.log(`Player Bio: ${this.state.player_bio}`);
        // console.log(`Player Priority: ${this.state.player_priority}`);
        // console.log(`Player Completed: ${this.state.player_completed}`);

        const newPlayer = {
            id: this.myUuidGenerator(),
            name: this.state.player_name,
            bio: this.state.player_bio
        }


        //console.log("Before dispathing from onclick")
        // console.log(newPlayer)


        //console.log("State before calling dispatch: ", this.props.state)
        this.props.postPlayer(newPlayer)

        //console.log("Before dispathing from onclick")

        // axios.post('http://localhost:3005/api/players', newPlayer)
        //     .then(resp => console.log(resp.data))



        this.setState({
            player_name: '',
            player_bio: '',
            player_priority: '',
            player_completed: false
        })
    }

    render() {
        return(
            <div style={{marginTop:20}} className="container">
                {/*<h5>Add Player View</h5>*/}
                <h3>Add New Player</h3>
                <form onSubmit={this.onSubmit}>
                {/*<form>*/}
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Player Name"
                            value={this.state.player_name} //from [https://www.youtube.com/watch?v=qvBZevK1HPo] at 50 min
                            onChange={this.onChangePlayerName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Player bio..."
                            value={this.state.player_bio}
                            onChange={this.onChangePlayerBio}
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.player_priority==='Low'}
                                //checked={false}
                                onChange={this.onChangePlayerPriority}
                                // readOnly={true}//Dont use when onChange is done
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.player_priority==='Medium'}
                                // checked={false}
                                onChange={this.onChangePlayerPriority}
                                // readOnly={true}//Dont use when onChange is done
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.player_priority==='High'}
                                // checked={true}
                                onChange={this.onChangePlayerPriority}
                                // readOnly={true}//Dont use when onChange is done
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Player" className="btn btn-primary" />
                        <Button onClick={() =>{
                            authAction.logout(() =>{
                                this.props.history.push("/")
                            })
                        }}>LogOut</Button>
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
    postPlayer: (newPlayer) => dispatch(postPlayer(newPlayer))
})

// export default AddPlayerView
export default connect(mapStateToProps,mapDispatchToProps)(AddPlayerView)
