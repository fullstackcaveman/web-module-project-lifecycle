import React, { Component } from 'react';
import axios from 'axios';
import { BASE_URL } from './config';
import './styles/main.css';
import UserCard from './components/UserCard';

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
		return (
			<div className='container'>
				<div className='left'>
					<h1>App Working</h1>
					{this.state.users.map((user) => {
						return <UserCard key={user.id} gitUser={user} />;
					})}
				</div>
				<div className='right'>
					<form onSubmit={this.handleSubmit}>
						<input
							type='text'
							name='getUser'
							placeholder='Search Users'
							onChange={this.handleChange}
							value={this.state.formValue}
						/>
						<button>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default App;
