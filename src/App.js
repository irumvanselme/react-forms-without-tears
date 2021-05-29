import RegisterFrom from "./Forms/Register";

function App() {
	return (
		<div className="container">
			<div className="row row-cols-2 vh-100 align-items-center">
				<div className="col">
					<RegisterFrom />
				</div>
				<div className="col">
					<img
						src="https://rknetworkmarketing.com/images/login.jpg"
						alt="Averycoolimage"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
