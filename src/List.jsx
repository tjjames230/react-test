const ListItem = (props) => {
	return <li>{props.animal}</li>;
};

const List = (props) => {
	if (!props.animals) {
		return <div>Loading...</div>;
	}

	if (props.animals.length === 0) {
		return <div>There are no animals!</div>;
	}

	return (
		<ul>
			{props.animals.map((animal) => {
				return <ListItem key={animal} animal={animal} />;
			})}
		</ul>
	);
};

export default List;
