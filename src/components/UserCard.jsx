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

	handleFollowersClick(e) {
		const userTarget = document.getElementById(`${e.target.id}`);

		userTarget.classList.add('showFollowers');
	}

	render() {
		return (
			<Card id={this.props.gitUser.id} className='userCard'>
				<div className='flex'>
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
						<CardContent className='info-block'>
							<div className='info'>
								<Typography>Name: {this.props.gitUser.name} </Typography>
								<Typography>Username: @{this.props.gitUser.login}</Typography>
								<Typography>Bio: {this.props.gitUser.bio}</Typography>
							</div>

							<div className='btn' onClick={this.handleFollowersClick}>
								<button id={this.props.gitUser.id}>Show Followers</button>
							</div>
						</CardContent>
					</div>
				</div>
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
