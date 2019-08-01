import {checkUserInLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage} from "../globalFunctions";

class AuthAction {
    constructor(){
        this.authenticated = checkUserInLocalStorage()
    }

    login(callBackPushHistory){
        if(checkUserInLocalStorage()){
            let user = getUserFromLocalStorage()
            let token = user.access_token
            if(token){
                this.authenticated = true
                callBackPushHistory()
            }
        }
    }

    logout(callBackPushHistory){
        removeUserFromLocalStorage()
        this.authenticated = false
        callBackPushHistory()
    }

    isAuthenticated(){
        return this.authenticated
    }
}

export default new AuthAction()