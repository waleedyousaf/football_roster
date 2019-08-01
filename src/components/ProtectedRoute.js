import React from "react";
import {Route, Redirect} from "react-router-dom"
import authAction from "../actions/authAction";

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render{
            (props) => {
                if (authAction.isAuthenticated()){
                    return <Component {...props}/>
                }
                else {
                    return <Redirect to={{
                    pathName:"/loginview",
                    state:{
                        from:props.location
                    }
                    }}/>
                }

            }
        }/>
    )
}