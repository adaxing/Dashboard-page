import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import './css/userSide.css';
	 
export default class UserSide extends Component {
	constructor(props){
		super(props);
		this.state = {
			cards: [
				{
					image: 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
					name: 'Rosy',
					description: 'Rosy is a lazy cat and love to sleep',
				},
				{
					image: 'https://i.ytimg.com/vi/lrvqjdMcjjQ/hqdefault.jpg',
					name: 'Bossy',
					description: 'Bossy is a bossy cat and love to order',

				},
				{
					image: 'https://www.clickertraining.com/files/u1/kitten_250.jpg',
					name: 'Nani',
					description: 'Nani is a little cat',
				}
			]
		}
	}

	card = () => {
		return this.state.cards.map((e) => {
			return (<Card className='card' key={e.name}>
				<div className='details'>
					<CardActionArea className='content'>
				        <img className='image' src={e.image} alt='cat images'/>					
				        <CardContent>
				          <Typography component='h6' variant='h6'>
				            {e.name}
				          </Typography>
				          <Typography variant="subtitle1" color="textSecondary">
				            {e.description}
				          </Typography>
				        </CardContent>
				        <Divider />
				    </CardActionArea>
				</div>
				<div className='more'>
				    <CardActions>
				        <Button size="small" color="primary">
				          Share
				        </Button>
				        <Button size="small" color="primary">
				          Learn More
				        </Button>
				    </CardActions>
				</div>
		    </Card>);
		});
	}
	render() {
		return (
			<div className='card-row'>
				{this.card()}
			</div>
		)
	}
}