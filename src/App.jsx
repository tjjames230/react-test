import Header from "./Header";

function App() {
	let animalList = ["1", "2", "3", "4"];

	return (
		<>
			<Header prop={animalList} />
		</>
	);
}

export default App;
