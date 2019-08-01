import React, {Component} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {deletePlayer} from '../actions/playerAction'
//import ConfirmDeleteModalView from '/actions'
import ConfirmDeleteModalView from "./ConfirmDeleteModalView";
//import {selectPlayer} from '../actions/playerAction'
import { Button } from 'react-bootstrap';
import Pokeball from "../pokeball.jpg";

class PlayerDetailView extends Component {

    constructor(props){
        super(props)
        this.state = {
            modalShow: false
        }
    }

    componentWillMount() {
        console.log("In componentsDidMount of PlayerDetailView - Checking DeleteFucn: ",this.deletePlayer)
        // console.log("In componentsDidMount of PlayerDetailView")
        // console.log('In componentDidMount: Before selectPlayer',this.props.players.id)
        //this.props.selectPlayer(this.props.players.id);
        //this.props.selectPlayer(1);
        //console.log('In componentDidMount: After selectPlayer',this.props.players.id)
    }

    // handleClick = () => {
    //     console.log("In handleClick of PlayerDetailView")
    //     console.log(this.props.players.id)
    //     this.props.deletePlayer(1);
    //     //this.props.history.push('/');
    // }


    // To implement
    deletePlayer = (id) => {
        // console.log("In OnClick DeletePlayer of PlayerDetailView")
        // console.log('Id is: ',id)
        // console.log(this.props.selectedPlayer)
        this.props.deletePlayer(id)
        this.props.history.push('/');
    }

    render(){


        //const [modalShow, setModalShow] = React.useState(false);

        // console.log("Confrimd Delete",this.state.confirmDelete)
        // console.log("In render of Player Detail View",this.props)
        const player = this.props.selectedPlayer ? (
            <div className="card p-2 mt-2">
                <img className="card-img-top ml-auto mr-auto mt-1" style={{width: '15em',height:'13em'}} src={Pokeball} alt="Card cap" />
                <h4 className="center">{this.props.selectedPlayer.name}</h4>
                <p>{this.props.selectedPlayer.bio}</p>
                <div className="center">
                    {/*<Button className="btn grey" onClick={()=>this.deletePlayer(this.props.selectedPlayer.id)}>*/}
                    {/*    Delete Player*/}
                    {/*</Button>*/}

                    <Button className="btn btn-danger" onClick={() => this.setState({ modalShow: true })}>
                            Delete Player
                    </Button>

                    <ConfirmDeleteModalView
                            show={this.state.modalShow}
                            onHide={() => this.setState({ modalShow: false })}
                            confirmdelete = {() => this.deletePlayer(this.props.selectedPlayer.id)}
                        // confirm_delete={() => this.setState({confirm_delete: true})}
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
        // selectPlayer: (id) => {dispatch(selectPlayer(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetailView)
