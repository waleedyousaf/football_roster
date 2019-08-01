import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import NavbarView from "./components/NavbarView";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeView from "./components/HomeView";
import AddPlayerView from "./components/AddPlayerView";
import PlayerDetailView from "./components/PlayerDetailView";
import EditPlayerView from "./components/EditPlayerView";
import SignUpView from "./components/SignUpView";
import LoginView from "./components/LoginView";
import ToolTipViewTest from "./components/ToolTipViewTest";
import {ProtectedRoute} from "./components/ProtectedRoute";

class App extends Component {

    render() {
    return (
        <BrowserRouter>
            <div className="App">
                <NavbarView />
                <Switch>
                    <Route exact path='/' component={HomeView} ></Route>
                    <ProtectedRoute exact path='/addplayerview' component={AddPlayerView} ></ProtectedRoute>
                    <Route exact path='/tooltipview' component={ToolTipViewTest} ></Route>
                    <Route exact path='/loginview' component={LoginView} ></Route>
                    <Route exact path='/signupview' component={SignUpView} ></Route>
                    <Route exact path='/:player_id' component={PlayerDetailView} ></Route>
                    <Route exact path='/edit/:player_id' component={EditPlayerView} ></Route>
                </Switch>
                {/*{this.state.players}*/}
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
