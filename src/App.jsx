import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL } from './config';
import './styles/main.css';
import UserCard from './components/UserCard';
import Header from './components/Header';
import GitHub from '@material-ui/icons/GitHub';

class App extends Component {
	state = {
		me: 'fullstackcaveman',
		myProfile: {},
		getUser: '',
		users: [{}],
		formValue: '',
	};

	componentDidMount() {
		axios
			.get(`${BASE_URL}/${this.state.me}`)
			.then((res) => {
				console.log(res.data);
				const gitUser = res.data;
				this.setState({ users: [gitUser] });
				console.log(this.state.users);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	searchUser = (user) => {
		axios
			.get(`${BASE_URL}/${user}`)
			.then((res) => {
				this.setState({
					users: [...this.state.users, res.data],
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleChange = (e) => {
		this.setState({ formValue: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.searchUser(this.state.formValue);
		this.setState({ formValue: '' });
	};

	render() {
		console.log(this.state.users);
		return (
			<>
				<Header
					submit={this.handleSubmit}
					change={this.handleChange}
					value={this.state.formValue}
				/>
				<h1>
					<GitHub /> Git Users
				</h1>
				<div className='container'>
					<div>
						{this.state.users.map((user) => {
							return <UserCard key={user.id} gitUser={user} />;
						})}
					</div>
				</div>
			</>
		);
	}
}

export default App;
