import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/auth/:form" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </>
  );
}

export default App;
