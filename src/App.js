import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Wrapper from './components/wrapper/index'
//IMPORT PAGES
import IndexPage from './pages/index'

function App() {
	return (
		<>
			<Router>
				<Wrapper>
					<Route path="/" exact component={IndexPage} />
				</Wrapper>
			</Router>
		</>
	);
}

export default App;
