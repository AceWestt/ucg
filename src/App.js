import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';

import './App.scss';
import { AppProvider } from './appContext';
import Footer from './components/Footer';
import About from './pages/About';
import Production from './pages/Production';
import ProductionDetailed from './pages/ProductionDetailed';
import Projects from './pages/Projects';
import ProjectsDetailed from './pages/ProjectsDetailed';
import SpecialOffer from './pages/SpecialOffer';
import Development from './pages/Development';
import Contact from './pages/Contact';
import Career from './pages/Career';

function App() {
	return (
		<div className="App">
			<Router>
				<AppProvider>
					<Nav />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/about">
							<About />
						</Route>
						<Route exact path="/production">
							<Production />
						</Route>
						<Route path="/production/:id">
							<ProductionDetailed />
						</Route>
						<Route exact path="/projects">
							<Projects />
						</Route>
						<Route path="/projects/:id">
							<ProjectsDetailed />
						</Route>
						<Route path="/special-offer">
							<SpecialOffer />
						</Route>
						<Route path="/development">
							<Development />
						</Route>
						<Route path="/contact">
							<Contact />
						</Route>
						<Route path="/career">
							<Career />
						</Route>
					</Switch>
					<Footer />
				</AppProvider>
			</Router>
		</div>
	);
}

export default App;
