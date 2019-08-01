import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Button } from 'react-bootstrap';
import Pokeball from "../pokeball.jpg";
import {deletePlayer} from '../actions/playerAction'
import ConfirmDeleteModalView from "./ConfirmDeleteModalView";

class PlayerDetailView extends Component {
    constructor(props){
        super(props)
        this.state = {
            modalShow: false
        }
    }

    deletePlayer = (id) => {
        this.props.deletePlayer(id)
        this.props.history.push('/');
    }

    render(){
        const player = this.props.selectedPlayer ? (
            <div className="card p-2 mt-2">
                <img className="card-img-top ml-auto mr-auto mt-1" style={{width: '15em',height:'13em'}} src={Pokeball} alt="Card cap" />
                <h4 className="center">{this.props.selectedPlayer.name}</h4>
                <p>{this.props.selectedPlayer.bio}</p>
                <div className="center">
                    <Button className="btn btn-danger" onClick={() => this.setState({ modalShow: true })}>
                            Delete Player
                    </Button>
                    <ConfirmDeleteModalView
                            show={this.state.modalShow}
                            onHide={() => this.setState({ modalShow: false })}
                            confirmdelete = {() => this.deletePlayer(this.props.selectedPlayer.id)}
                    />
                </div>
            </div>
        ) : (
            <div className="center">Loading player...</div>
        )
        return(
            <div className="container">
                {player}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        selectedPlayer: state.selectedPlayer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePlayer: (id) => {dispatch(deletePlayer(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetailView)
