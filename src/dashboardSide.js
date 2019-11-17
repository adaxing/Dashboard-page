import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import React, { Component } from 'react';
import Charts from './charts';
import './css/dashboardSide.css';
import CustomizedTable from './employeesStats';
import EnhancedTableHead from './taskTable';


export default class DashboardSide extends Component {
	constructor(props){
		super(props)
		this.state = {
			cards: [
				{
					cardIcon: 'content_copy',
					description: 'Used Space',
					remaining: '49/50 GB',
					details: 'Get more Space',
					bottomIcon: 'warning',
					color: 'linear-gradient(60deg, #ffa726, #fb8c00)'
				},
				{
					cardIcon: 'home',
					description: 'Revenue',
					remaining: '$34,245',
					details: 'Last 24 Hours',
					bottomIcon:'insert_invitation',
					color: 'linear-gradient(60deg, #66bb6a, #43a047)'

				},
				{
					cardIcon: 'info_outline',
					description: 'Fixed Issues',
					remaining: '75',
					details: 'Tracked from Github',
					bottomIcon:'local_offer',
					color: 'linear-gradient(60deg, #ef5350, #e53935)'
				},
			]
		}
	}
	card = () => {
		return this.state.cards.map((e) => {
			return (
				<div className='card' key={e.description}>
					<div className='details'>
						<CardActionArea>
							<div className='icon-background' style={{background: e.color}}>
								<i className="material-icons">{e.cardIcon}</i>
							</div>
					        <div className='content'>
								<p>{e.description}</p>
								<h3 className='info-head'>
									{e.remaining}
								</h3>
							</div>
					    </CardActionArea>
					</div>
					<Divider />
					<div className='more'>
					    <CardActions>
					    	<div className='small-icon'>
					    		<i className="material-icons">{e.bottomIcon}</i>
					    	</div>
					    	<a href='#'>{e.details}</a>
					    </CardActions>
					</div>
	    		</div>
			);
		});
	}
	
	render() {
		return (
			<div>
				<h1>Material Dashboard</h1>
				<Button variant="contained" color="primary">
		      		Hello World
		    	</Button>
		    	<div className='card-row'>
					{this.card()}
				</div>
				<div className='charts'>
					<Charts />
				</div>
				<div className='tables'>
					<EnhancedTableHead />
					<CustomizedTable />
				</div>
			</div>
		)
	}
}
