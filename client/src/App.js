import { BrowserRouter as Router } from "react-router-dom";
import InitialRouter from "./navigators/initialNavigator";
import "./styles/globalStyles.css";
function App() {
	return (
		<div className="App">
			<Router>
				<InitialRouter />
			</Router>
		</div>
	);
}

export default App;
