import axios from 'axios';
import auth from './authAction'
import {setUserInLocalStorage} from "../globalFunctions";

// APIs
// Fetching All Players
export const fetchPlayer = () => {
    return(dispatch) => {
        let url="http://localhost:3007/api/players"
        return fetch(url)
            .then(resp => resp.json())
            .then(retrievedData => {
                dispatch(loadPlayers(retrievedData))
            })
    }
}

// Adding New Player
export function postPlayer(newPlayer){
    return(dispatch) => {
        return axios.post('http://localhost:3007/api/players', newPlayer)
            .then(resp => {
                dispatch(addPlayers(resp.data));
            })
    }
}

// Signing New User Up
export function postUser(newUser){
    return(dispatch) => {
        return axios.post('http://localhost:3007/api/users/register', newUser)
            .then(resp => {
                dispatch(addUser(resp.data));
            })
    }
}

// LogIn Auth
export function getAuthUser(user){
    return(dispatch) => {
        return axios.post('http://localhost:3007/api/users/auth/login',user)
            .then(resp => {
                let userInfo = {...resp.data,...user}
                setUserInLocalStorage(userInfo)
                mylogin()
            })
    }
}

export const mylogin = () => {
    auth.login(() => {
    })
}

// Updating a Player
export function putPlayer(player,selectedPlayer){
    return(dispatch) => {
        let url="http://localhost:3007/api/players/"+selectedPlayer.id;
        return axios.put(url, player)
            .then(resp => {
                dispatch(updatePlayer(resp.data));
            })
    }
}

// Deleting a Player
export function deletePlayer(id){
    return(dispatch) => {
        let url="http://localhost:3007/api/players/"+id;
        return axios.delete(url)
            .then(resp => {
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
