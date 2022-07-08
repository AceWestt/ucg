import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

import "./App.scss";
import { AppProvider } from "./appContext";
import Footer from "./components/Footer";
import About from "./pages/About";

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
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
