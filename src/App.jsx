import Header from "./Header";

function App() {
	let animalList = ["1", "2", "3", "4", "5"];

	return (
		<>
			<Header animalList={animalList} />
		</>
	);
}

export default App;
