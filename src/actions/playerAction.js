// import React from "react";
import axios from 'axios';
// import {history} from "../../../react-redux-registration-login-example-master/src/_helpers";
import auth from './authAction'

// APIs

// Fetching All Players
export const fetchPlayer = () => {
    return(dispatch) => {
        console.log('fetchingPlayers')
        // let url="http://localhost:3008/players"
        // let url="http://localhost:3007/player"
        let url="http://localhost:3007/api/players"
        return fetch(url)
            .then(resp => resp.json())
            .then(retrievedData => {
                console.log("After fetched", retrievedData)
                dispatch(loadPlayers(retrievedData))
            })
    }
}

// Adding New Player
export function postPlayer(newPlayer){
    return(dispatch) => {
        //console.log('In actions and post Player dispatch')
        // let url="http://localhost:3005/players"
        // let url="http://localhost:3004/player"
        return axios.post('http://localhost:3007/api/players', newPlayer)
            .then(resp => {
                //console.log("In actions and returning resp to dispatch")
                //console.log(resp.data)
                dispatch(addPlayers(resp.data));
            })

    }
}

// Signing New User Up
export function postUser(newUser){
    return(dispatch) => {
        //console.log('In actions and post Player dispatch')
        // let url="http://localhost:3005/players"
        // let url="http://localhost:3004/player"
        return axios.post('http://localhost:3007/api/users/register', newUser)
            .then(resp => {
                //console.log("In actions and returning resp to dispatch")
                //console.log(resp.data)
                dispatch(addUser(resp.data));
                // history.push('/login');
            })

    }
}

// LogIn Auth
export function getAuthUser(user){
    return(dispatch) => {
        return axios.post('http://localhost:3007/api/users/auth/login',user)
            .then(resp => {
                console.log("In GetAuthUser and returning resp to dispatch")
                let userInfo = {...resp.data,...user}
                //console.log("userInfo is: ",userInfo)
                localStorage.setItem('user', JSON.stringify(userInfo));
                mylogin()
                //dispatch(authUser(userInfo));
                // history.push('/login');
            })

    }
}

export const mylogin = () => {
    console.log("In actions mylogin")
    auth.login(() => {
        console.log("In auth.login")
        //this.props.history.push('/')
    })
}


// Updating a Player
export function putPlayer(player,selectedPlayer){
    return(dispatch) => {
        //console.log('In actions and put Player dispatch')
        let url="http://localhost:3007/api/players/"+selectedPlayer.id;
        return axios.put(url, player)
            .then(resp => {
                //console.log("In actions put player api and returning resp to dispatch")
                dispatch(updatePlayer(resp.data));
            })

    }
}

// Deleting a Player
export function deletePlayer(id){
    return(dispatch) => {
        //console.log('In actions and delete Player dispatch')
        // let url="http://localhost:3005/players"
        // let url="http://localhost:3004/player"
        console.log('Id is: ',id)
        let url="http://localhost:3007/api/players/"+id;
        //console.log("Url is: ",url)
        return axios.delete(url)
            .then(resp => {
                //console.log("In actions api and returning resp to dispatch")
                //console.log(resp.data)
                dispatch(delPlayer(id));
            })

    }
}


// Fetch Players Action
export const loadPlayers = (players) => {
    return {
        type: "FETCH_PLAYERS",
        players
    }
}

// Add Player Action
export const addPlayers = (player) => {
    return {
        type: "POST_PLAYERS",
        player
    }
}

// Auth User Action
export const authUser = (user) => {
    return {
        type: "AUTH_USER",
        user
    }
}

// Add User Action
export const addUser = (user) => {
    return {
        type: "POST_USERS",
        user
    }
}

// Update Player Action
export const updatePlayer = (player) => {
    return {
        type: 'UPDATE_PLAYER',
        player
    }
}

// Delete Player Action
export const delPlayer = (id) => {
    return {
        type: 'DELETE_PLAYER',
        id
    }
}

// Select a Player Action
export const selectPlayer = (player) => {
    return {
        type: 'SELECT_PLAYER',
        player
    }
}
















// Working fine with axios

// export function fetchPlayer(){
//     return(dispatch) => {
//         // console.log('fetchingPlayers')
//         // let url="http://localhost:3005/players"
//         let url="http://localhost:3004/player"
//         return axios.get(url)
//             .then((response) => {
//                 console.log('After response')
//                 dispatch(loadPlayers(response.data));
//
//             })
//     }
// }
















// Shifted from App.js - without redux i.e. actions etc - Not working here -

// export const FETCH_PLAYERS = 'FETCH_PLAYERS';
// export const fetchPlayer = () => dispatch => {
//     // let url = "http://localhost:3004/player"
//     let url = "http://localhost:3004/players"
//
//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => {
//             let players = data.map((player,index) => {
//                 // console.log(player);
//                 return (
//                     <div key={index}>
//                         <h5>{player.id}</h5>
//                         <p>{player.name}</p>
//                     </div>
//                 )
//             })
//             this.setState({players: players});
//         })
//
// }


//Modified my own with s's - Not Working

// export const FETCH_PLAYERS = 'FETCH_PLAYERS';
// export const fetchPlayer = () => dispatch => {
//     // let url = "http://localhost:3004/player"
//     let url = "http://localhost:3004/players"
//
//     fetch(url)
//         .then(resp => resp.json())
//         .then(result => {
//             return (dispatch({
//                 type: FETCH_PLAYERS,
//                 payload: result
//             }))
//         })
//
// }



//Fetch Player My Prev Code

// export const FETCH_PLAYERS = 'FETCH_PLAYERS';
// export const fetchPlayer = () => dispatch => {
//     // let url = "http://localhost:3004/player"
//     let url = "http://localhost:3004/players"
//
//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => {
//             let players = data.map((player,index) => {
//                 // console.log(player);
//                 return (
//                     <div key={index}>
//                         <h5>{player.id}</h5>
//                         <p>{player.name}</p>
//                     </div>
//                 )
//             })
//             this.setState({players: players});
//         })
//
// }

//Todo List Proj Post Actions

// export const deletePost = (id) => {
//     return {
//         type: 'DELETE_POST',
//         // id: id
//
//         //Cuz same key value
//         id
//     }
// }