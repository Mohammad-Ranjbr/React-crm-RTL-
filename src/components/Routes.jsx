import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Contact from '../pages/Contact/Contact'
import RecentCall from '../pages/CallLog/CallLogComponents'
import Notification from '../pages/Notifications/NotificationComponents'
import Ticket from '../pages/Ticketing/TicketingComponents'
import setting from '../pages/Setting/SettingComponents'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/RecentCall' component={RecentCall}/>
            <Route path='/Notification' component={Notification}/>
            <Route path='/Ticket' component={Ticket}/>
            <Route path='/setting' component={setting}/>

        </Switch>
    )
}

export default Routes
