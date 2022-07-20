import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
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
import News from './pages/News';
import './App.scss';
import NewsDetailed from './pages/NewsDetailed';
import { useEffect } from 'react';
import ModalContainer from './components/ModalContainer';

function App() {
	useEffect(() => {
		function hashLinkScroll() {
			const { hash } = window.location;
			if (hash !== '') {
				// Push onto callback queue so it runs after the DOM is updated,
				// this is required when navigating from a different page so that
				// the element is rendered on the page before trying to getElementById.
				setTimeout(() => {
					const id = hash.replace('#', '');
					const element = document.getElementById(id);
					if (element) element.scrollIntoView();
				}, 0);
			}
		}
		hashLinkScroll();
	}, []);
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
						<Route exact path="/news">
							<News />
						</Route>
						<Route path="/news/:id">
							<NewsDetailed />
						</Route>
					</Switch>
					<Footer />
					<ModalContainer />
				</AppProvider>
			</Router>
		</div>
	);
}

export default App;
