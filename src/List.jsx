const List = () => {
	const animals = ["dog", "frog", "cow", "chicken", "sloth"];

	return (
		<>
			<h1>List:</h1>
			<ul>
				{animals.map((animal) => {
					return <li key={animal}>{animal}</li>;
				})}
			</ul>
		</>
	);
};

export default List;
