import React from 'react'
import Login from './components/Forms/Login'
import Signup from './components/Forms/Signup'
import LandingPage from './components/Landing/LandingPage'
import Search from './components/search/Search'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App() {
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/search" component={Search} />
        </Switch>
    )
}