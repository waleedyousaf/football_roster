class AuthAction {
    constructor(){

        this.authenticated = localStorage.hasOwnProperty("user")
    }

    login(cb){
        console.log("In authActions!!")
        if(localStorage.hasOwnProperty("user")){
            let user = JSON.parse(localStorage.getItem('user'))
            let token = user.access_token
            if(token){
                console.log("In this.authenticated BEFORE: ",this.authenticated)
                this.authenticated = true
                console.log("In this.authenticated AFTER: ",this.authenticated)
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