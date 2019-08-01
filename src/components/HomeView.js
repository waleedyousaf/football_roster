import React, {Component} from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
//import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'
import {fetchPlayer, selectPlayer} from '../actions/playerAction'
import Pokeball from "../pokeball.jpg"
import {Button} from 'react-bootstrap'
//import * as actionCreators from '../actions/playerAction'

class HomeView extends Component {
    componentDidMount() {
        // console.log(this.props, 'started will mount')
        this.props.fetchPlayer()
        // console.log(this.props, 'Ended will mount')
    }

    mySelectPlayer = (player) => {
        // console.log("In OnClick SelectPlayer of homeView")
        // console.log(this.props.selectedPlayer)
        this.props.selectPlayer(player)
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log("In CompWillUpdate!")
    //     localStorage.setItem('Players',JSON.stringify(nextState.players))
    // }

    render() {
        // console.log(this.props, 'In render of HomeView')
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
                                    {/*<small className="text-muted"><Link to={"/edit/" + player.id} onClick={()=>this.mySelectPlayer(player)}>Edit</Link></small>*/}
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

// export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
