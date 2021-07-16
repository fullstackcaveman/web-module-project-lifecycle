import { Typography } from '@material-ui/core';

const Followers = ({ followers }) => {
	return (
		<div>
			{followers.map((follower) => {
				return (
					<a href={follower.html_url} target='_blank'>
						<Typography key={follower.id}>{follower.login}</Typography>
					</a>
				);
			})}
		</div>
	);
};

export default Followers;
