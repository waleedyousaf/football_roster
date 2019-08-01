class AuthAction {
    constructor(){
        this.authenticated = localStorage.hasOwnProperty("user")
    }

    login(callBackPushHistory){
        if(localStorage.hasOwnProperty("user")){
            let user = JSON.parse(localStorage.getItem('user'))
            let token = user.access_token
            if(token){
                console.log("In this.authenticated BEFORE: ",this.authenticated)
                this.authenticated = true
                console.log("In this.authenticated AFTER: ",this.authenticated)
                callBackPushHistory()
            }
        }
        else {
            console.log("hasOwnProperty: FALSE")
        }
    }

    logout(callBackPushHistory){
        localStorage.removeItem('user')
        this.authenticated = false
        callBackPushHistory()
    }

    isAuthenticated(){
        return this.authenticated
    }
}

export default new AuthAction()