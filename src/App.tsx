import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/about";
import Home from "./routes/home";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";

//HashRouter = container
//Route = the path of screen
// path="/" means if URL is finishied "/" after "/#"
// exact = {true} means I only read the page URL of which is finished as "/"
//therefore, If my URL is "~~~/#/abouts", it renders two webpage and shows me both

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
