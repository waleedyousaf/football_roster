import Button from "react-bootstrap/Button";
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {postPlayer} from "../actions/playerAction";
import authAction from "../actions/authAction";

class AddPlayerView extends Component {
    constructor(props){
        super(props);
        this.onChangePlayerName = this.onChangePlayerName.bind(this);
        this.onChangePlayerBio = this.onChangePlayerBio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            player_name: '',
            player_bio: '',
        }
    }

    onChangePlayerName(event){
        this.setState({
            player_name: event.target.value
        })
    }

    onChangePlayerBio(event){
        this.setState({
            player_bio: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault();
        const newPlayer = {
            name: this.state.player_name,
            bio: this.state.player_bio
        }
        this.props.postPlayer(newPlayer)
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
                <h3>Add New Player</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Player Name"
                            value={this.state.player_name}
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
                        <Button type="submit" value="Add Player" className="btn btn-primary">Add Player</Button>
                        <Button className="btn btn-danger ml-2" onClick={() =>{
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

export default connect(mapStateToProps,mapDispatchToProps)(AddPlayerView)
