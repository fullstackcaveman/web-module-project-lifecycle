import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

class UserCard extends React.Component {
	constructor(props) {
		super(props);

		const { gitUser } = props;
		const {
			login,
			avatar_url,
			bio,
			followers,
			following,
			html_url,
			location,
			name,
		} = gitUser;

		this.state = {
			login,
			avatar_url,
			bio,
			followers,
			following,
			html_url,
			location,
			name,
		};
	}

	render() {
		return (
			<div>
				<h2>Name: {this.state.name}</h2>
				<h2>Username: @{this.state.login}</h2>
			</div>
		);
	}
}

export default UserCard;
