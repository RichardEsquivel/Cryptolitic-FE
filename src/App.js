import React from "react";
import { Switch, Route } from "react-router-dom";
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
import CreateProject from "./Components/CreateProject";

function App() {
  return (
    <div className='App'>
      <div className='navHeader'>
        <NavigationHeader />
        <NavigationBar />
      </div>
      <div className='Main'>
        <Switch>
          <Route exact path='/trading-dashboard'>
            <TradingDashboard />
          </Route>
          <Route exact path='/arbitrage-dashboard'>
            <ArbitrageDashboard />
          </Route>
        </Switch>
      </div>
      <Projects />
<CreateProject />
      <Footer />
    </div>
  );
}

export default App;
