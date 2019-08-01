class AuthAction {
    constructor(){
        this.authenticated = false
    }

    login(cb){
        if(localStorage.hasOwnProperty("user")){
            let user = JSON.parse(localStorage.getItem('user'))
            let token = user.access_token
            if(token){
                this.authenticated = true
                cb()
            }
        }
        else {
            console.log("hasOwnProperty: FALSE")
        }
    }

    logout(cb){
        localStorage.removeItem('user')
        this.authenticated = false
        cb()
    }

    isAuthenticated(){
        return this.authenticated
    }
}

export default new AuthAction()