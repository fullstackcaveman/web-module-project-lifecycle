const Followers = ({ followers }) => {
	return (
		<div>
			{followers.map((follower) => {
				return <p key={follower.id}>{follower.login}</p>;
			})}
		</div>
	);
};

export default Followers;
