import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Contact from '../pages/Contact/Contact'
import RecentCall from '../pages/CallLog/CallLogComponents'
import Notification from '../pages/Notifications/NotificationComponents'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/RecentCall' component={RecentCall}/>
            <Route path='/Notification' component={Notification}/>

        </Switch>
    )
}

export default Routes
