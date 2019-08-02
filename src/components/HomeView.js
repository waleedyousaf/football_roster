import {Button} from 'react-bootstrap'
import Pokeball from "../pokeball.jpg"
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchPlayer, selectPlayer} from '../actions/playerAction'

class HomeView extends Component {
    componentDidMount() {
        this.props.fetchPlayer()
    }

    mySelectPlayer = (player) => {
        this.props.selectPlayer(player)
    }

    render() {
        const {players} = this.props;
        const playerList = players.length ? (
            players.map(player => {
                return (
                        <div className="card mt-2" key={player.id} style={{minWidth:'15em'}}>
                            <Link className="ml-auto mr-auto" to={'/' + player.id} onClick={()=>this.mySelectPlayer(player)}>
                                <img className="card-img-top ml-auto mr-auto mt-1" style={{width: '15em',height:'13em'}} src={Pokeball} alt="Card cap" />
                            </Link>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <Link to={'/' + player.id} onClick={()=>this.mySelectPlayer(player)}>
                                            <span className="card-title purple-text">{player.name}</span>
                                        </Link>
                                    </h5>
                                    <p className="card-text">{player.bio}</p>
                                </div>
                                <div className="card-footer">
                                    <Button><Link style={{color:'white'}} to={"/edit/" + player.id} onClick={()=>this.mySelectPlayer(player)}>Edit</Link></Button>
                                </div>
                        </div>
                )
            })
        ) : (
            <div className="center">No players yet!!!</div>
        )
        return (
            <div className="container">
                <div className="card-deck mt-2">
                    {playerList}
                </div>
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

const mapDispatchToProps = (dispatch) => ({
    fetchPlayer: () => dispatch(fetchPlayer()),
    selectPlayer: (selectedPlayer) => dispatch(selectPlayer(selectedPlayer))

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
