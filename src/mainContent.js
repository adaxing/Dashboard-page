import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UserSide from './userSide';
import DashboardSide from './dashboardSide';

const Dashboard =  () => {
	return (
		<div>
			<DashboardSide />
		</div>
	)
}
const Orders =  () => (
	<div>
		<h1>Welcome to the order page</h1>
	</div>
)
const Users =  () => (
	<div>
		<UserSide />
	</div>
)
const Reports =  () => (
	<div>
		<h1>Welcome to the report page</h1>
	</div>
)
const Integrations =  () => (
	<div>
		<h1>Welcome to the integration page</h1>
	</div>
)

export default class MainContent extends Component {
	render(){
		return (
			<main>
			    <Switch>
			      <Route exact path='/' component={Dashboard}/>
			      <Route path='/orders' component={Orders}/>
			      <Route path='/users' component={Users}/>
			      <Route path='/reports' component={Reports}/>
			      <Route path='/integrations' component={Integrations}/>
			    </Switch>
		  	</main>
		)
	}
}