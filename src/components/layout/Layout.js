import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Contact from "../../pages/Contact";
import Game from "../../pages/Game";
import NavigationBar from "./NavigationBar";

const Layout = () => {
    return (
        <Router>
            <NavigationBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/game/:id" component={Game} />
            </Switch>
        </Router>
    );
}

export default Layout;