import React, {Component} from 'react'
import {connect} from "react-redux";
import {putPlayer} from "../actions/playerAction";

class EditPlayerView extends Component {
    constructor(props){
        super(props);
        this.onChangePlayerName = this.onChangePlayerName.bind(this);
        this.onChangePlayerBio = this.onChangePlayerBio.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            player_name: this.props.selectedPlayer.name,
            player_bio: this.props.selectedPlayer.bio
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

    onSubmit(event){
        event.preventDefault();
        const updatedPlayer = {
            name: this.state.player_name,
            bio: this.state.player_bio
        }
        this.props.putPlayer(updatedPlayer,this.props.selectedPlayer)
        this.props.history.push('/');
    }

    render() {
        return(
            <div style={{marginTop:20}} className="container">
                <h3>Update Player</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="from-group">
                        <label>Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.player_name}
                               onChange={this.onChangePlayerName}
                        />
                    </div>
                    <div className="from-group">
                        <label>Bio: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.player_bio}
                               onChange={this.onChangePlayerBio}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Player" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedPlayer: state.selectedPlayer
    }
}

const mapDispatchToProps = (dispatch) => ({
    putPlayer: (updatedPlayer, selectedPlayer) => dispatch(putPlayer(updatedPlayer,selectedPlayer))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditPlayerView)
