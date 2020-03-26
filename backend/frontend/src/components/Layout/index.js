import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute'
import Navbar from '../Navbar'
import Progress from '../Progress'
import Notification from '../Notification'
import Login from '../../route/Login'
import Register from '../../route/Register'
import Dashboard from '../../route/Dashboard'

function Layout({loading}) {
    return (
        <React.Fragment>
            <Router>
                <Navbar/>
                <Progress isAnimating={loading}/>
                <Notification/>

                <Switch>
                    <PrivateRoute exact path='/' component={Dashboard}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/register' component={Register}/>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    loading: state.loading.isLoading
})

export default connect(mapStateToProps)(Layout);