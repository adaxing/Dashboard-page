import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';
import React, { Component } from 'react';
import BarChart from './barChart';
import './css/charts.css';
import DownLine from './downLine';
import UpLine from './simpleLine';
export default class Charts extends Component {
	constructor(props){
		super(props)
		this.state = {
			cards: [
				{
					cardIcon: <UpLine />,
					title: 'Daily Sales',
					description: ' 55% increase in today sales.',
					details: 'updated 4 minutes ago',
					bottomIcon: 'access_time',
					color: 'linear-gradient(60deg, #66bb6a, #43a047)'
				},
				{
					cardIcon: <BarChart />,
					title: 'Email Subscriptions',
					description: 'Last Campaign Performance',
					details: 'campaign sent 2 days ago',
					bottomIcon:'access_time',
					color: 'linear-gradient(60deg, #ffa726, #fb8c00)'

				},
				{
					cardIcon: <DownLine />,
					title: 'Completed Tasks',
					description: 'Last Campaign Performance',
					details: 'campaign sent 2 days ago',
					bottomIcon:'access_time',
					color: 'linear-gradient(60deg, #ef5350, #e53935)'
				},
			]
		}
	}
	card = () => {
		return this.state.cards.map((e) => {
			return (
				<div className='cards' key={e.title}>
					<div className='cards-details'>
						<CardActionArea>
							<div className='chart-icons' style={{background: e.color}}>
								{e.cardIcon}
							</div>
					        <div className='chart-content'>
								<h3>{e.title}</h3>
								<p className='chart-descrip'>
									{e.description}
								</p>
							</div>
					    </CardActionArea>
					</div>
					<Divider />
					<div className='chart-more'>
					    <CardActions>
					    	<div className='chart-sicon'>
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
			<div className='list-card'>
				{this.card()}
	    	</div>
		)
	}
}