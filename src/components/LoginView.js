import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getAuthUser} from "../actions/playerAction";
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class LoginView extends Component {



    constructor(props){
        super(props);
        //const [open, setOpen] = React.useState(false);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserPass = this.onChangeUserPass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleTooltipClose = this.handleTooltipClose.bind(this);
        this.handleTooltipOpen = this.handleTooltipOpen.bind(this);

        this.state = {
            user_name: '',
            user_pass: '',
            setOpen: false,
            open: false
        }
    }

    handleTooltipClose() {
        console.log("In handleTooltipClose!!")
        console.log("this.setOpen is: ",this.state.setOpen,"this.open is: ",this.state.open)
        this.setState({
            setOpen:false,
            open: true
        })
    }

    handleTooltipOpen() {
        console.log("In handleTooltipOpen!!")
        console.log("this.setOpen is: ",this.state.setOpen,"this.open is: ",this.state.open)
        this.setState({
            setOpen:true,
            open: false
        })
    }

    onChangeUserName(e){
        this.setState({
            user_name: e.target.value
        })
        if (this.verifyUserName(e.target.value)){
            console.log("UserNameVerified!!")
        }
        else {
            console.log("UserNameNOTVerified!!")
        }
    }

    verifyUserName(username){
        console.log("In verify func")
        if (username.length >=4){
            return true
        }
        else return false
    }

    onChangeUserPass(e){
        this.setState({
            user_pass: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            user_name: this.state.user_name,
            user_pass: this.state.user_pass
        }

        this.props.getAuthUser(user)

        this.setState({
            user_name: '',
            user_pass: ''
        })
    }

    render() {
        return(
            <div style={{marginTop:20}} className="container">
                <h3>Log In</h3>
                <form onSubmit={this.onSubmit}>
                    {/*<form>*/}
                    <div className="form-group">
                        <label>User Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="User Name"
                            value={this.state.user_name} //from [https://www.youtube.com/watch?v=qvBZevK1HPo] at 50 min
                            onChange={this.onChangeUserName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Ener password"
                            value={this.state.user_pass}
                            onChange={this.onChangeUserPass}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Log In" className="btn btn-primary" />
                    </div>
                    <Grid item>
                        <ClickAwayListener onClickAway={this.handleTooltipClose}>
                            <div>
                                <Tooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={this.handleTooltipClose}
                                    open={this.state.open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title="Add"
                                >
                                    <Button onClick={this.handleTooltipOpen}>Click</Button>
                                </Tooltip>
                            </div>
                        </ClickAwayListener>
                    </Grid>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        state
    }
}


const mapDispatchToProps = (dispatch) => ({
    getAuthUser: (user) => dispatch(getAuthUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginView)
