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
    }
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_PLAYER'){
        let newPlayers = state.players.filter(player => {
            return action.id !== player.id
        });
        return {
            ...state,
            players: newPlayers
        }
    }

    else if(action.type === 'SELECT_PLAYER'){
        let newlySelectedPlayer = action.player
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
        let players = [...state.players]
        players.push(action.player)
        return {
            ...state,
            players: players
        }
    }

    else if(action.type === 'POST_USERS'){
        let users = [...state.reg_users]
        users.push(action.user)
        return {
            ...state,
            reg_users: users
        }
    }

    else if(action.type === 'UPDATE_PLAYER'){
        let updatedPlayer = state.players.find(player => {
            return state.selectedPlayer.id === player.id
        });
        updatedPlayer.name = action.player.name;
        updatedPlayer.bio = action.player.bio;
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
    }
    return state;
}

export default rootReducer
