const Header = (animalList) => {
	const list = animalList.map((animal) => <li key={animal}>{animal}</li>);

	return (
		<header className="flex justify-between p-8 border-b">
			<picture className="bg-red-500"></picture>
			<ul className="flex gap-6">{list}</ul>
		</header>
	);
};

export default Header;
