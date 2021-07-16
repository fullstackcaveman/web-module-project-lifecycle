import React from 'react';
import { Button, TextField } from '@material-ui/core';

const Header = ({ submit, change, value }) => {
	return (
		<header>
			<form onSubmit={submit}>
				<TextField
					size='small'
					variant='outlined'
					type='text'
					name='getUser'
					placeholder='Search GitHub Users'
					onChange={change}
					value={value}
					label='Search GitHub Users'
				/>
				<Button variant='contained' color='primary' size='medium' type='submit'>
					Submit
				</Button>
			</form>
		</header>
	);
};

export default Header;
