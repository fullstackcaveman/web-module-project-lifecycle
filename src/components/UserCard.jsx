import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import Followers from './Followers';

class UserCard extends React.Component {
	state = {
		followers: [],
	};

	componentDidMount() {
		axios
			.get(`https://api.github.com/users/${this.props.gitUser.login}/followers`)
			.then((res) => {
				const follower = res.data;
				this.setState({ followers: [follower] });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<Card className='userCard'>
				<CardActionArea className='flex'>
					<div className='flex-left'>
						<CardMedia>
							<img
								className='gitImage'
								src={this.props.gitUser.avatar_url}
								alt={this.props.gitUser.name}
							/>
						</CardMedia>
					</div>
					<div className='flex-right'>
						<CardContent>
							<Typography>Name: {this.props.gitUser.name} </Typography>
							<Typography>Username: @{this.props.gitUser.login}</Typography>
						</CardContent>
					</div>
				</CardActionArea>
				<div>
					<CardContent>
						{this.state.followers.map((follower) => {
							return <Followers followers={follower} />;
						})}
					</CardContent>
				</div>
			</Card>
		);
	}
}

export default UserCard;
