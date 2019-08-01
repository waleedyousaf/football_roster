//import {FETCH_PLAYERS} from "../actions/playerAction";

const initState = {
    players:[
        {
            id:'1',
            name: 'Neymar Jr',
            bio:'Brazilian footballer - worldcup winner, - former barcelona player - current PSG player'
        },
        {
            id:'2',
            name: 'Eden Hazard',
            bio:'German footaller - former chelsea player - current Real Madrid player - record signing'
        },
        {
            id:'3',
            name: 'Luis Suarez',
            bio:'Uraguay nationale - current barcelona striker - not enough data :('
        },
    ],
    reg_users: [
        {
            uuid:null,
            name: 'null',
            pass: 'null',
            loggedInStatus:false
        }
    ],
    selectedPlayer: {
        id:'null',
        name: 'Null',
        bio:'not enough data :('
    },
    // selectedUser: {
    //     uuid:'null',
    //     user_name: 'Null',
    //     user_pass:'Null'
    // }
}

const rootReducer = (state = initState, action) => {
    //console.log(action);
    if(action.type === 'DELETE_PLAYER'){
        //console.log("In reducer DELETE_PLAYER before updating")
        let newPlayers = state.players.filter(player => {
            return action.id !== player.id
        });
        return {
            ...state,
            players: newPlayers //Note: Always return array
        }
    }

    else if(action.type === 'SELECT_PLAYER'){

        let newlySelectedPlayer = action.player
        //console.log("In SelectPlayer Reducer Type before return", action.player)

        return {
            ...state,
            selectedPlayer: newlySelectedPlayer
        }
    }

    else if(action.type === 'FETCH_PLAYERS'){
        return {
            ...state,
            players: action.players
        }
    }

    else if(action.type === 'POST_PLAYERS'){
        // console.log("In reducer and in POST_PLAYERS before returning!")
        // console.log("Players right before updating state: ",state.players)
        // console.log("Check single OR array of players sent by action i.e action.id: ",action.player)
        //
        // console.log("Players in state before pushing new: ",state.players)
        let players = [...state.players]
        // console.log("Players in array before pushing: ",players)
        // console.log("Player to push: ",action.player)
        players.push(action.player)
        // console.log("Players in array after pushing new: ",players)

        return {
            ...state,
            players: players
        }
    }

    else if(action.type === 'POST_USERS'){
        // console.log("In reducer and in POST_PLAYERS before returning!")
        // console.log("Players right before updating state: ",state.players)
        // console.log("Check single OR array of players sent by action i.e action.id: ",action.player)
        //
        // console.log("Players in state before pushing new: ",state.players)
        let users = [...state.reg_users]
        // console.log("Players in array before pushing: ",players)
        // console.log("Player to push: ",action.player)
        users.push(action.user)
        // console.log("Players in array after pushing new: ",players)

        return {
            ...state,
            reg_users: users
        }
    }

    else if(action.type === 'UPDATE_PLAYER'){
        //console.log("In reducer and in UPDATE_PLAYERS before returning!")

        let updatedPlayer = state.players.find(player => {
            return state.selectedPlayer.id === player.id
        });
        //console.log("Update Player: ",updatedPlayer)
        updatedPlayer.name = action.player.name;
        updatedPlayer.bio = action.player.bio;
        //console.log("Update Player Name: ",updatedPlayer.name, "Update Player Bio: ",updatedPlayer.bio, "Updated Player: ",updatedPlayer)
        return {
            ...state,
            players: state.players.map(player => {
                if (player.id === updatedPlayer.id) {
                    return updatedPlayer;
                }
                else {
                    return player;
                }
            })
        }
        // console.log("In Reducer - UPDATE_PLAYER - After updating state")
        // console.log(this.state.players)
    }
    return state;
}

export default rootReducer
