import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import ScheduleMatch from "./components/schedule/ScheduleMatch";
import Home from "./components/home/Home";
import LiveScore from "./components/livescores/LiveScore";
import Series from "./components/series/Series";
import News from "./components/news/News";
import Ranking from "./components/ranking/Ranking";
import Polls from "./components/polls/Polls";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <br />
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/livescore" component={LiveScore} />
          <Route exact path="/schedule" component={ScheduleMatch} />
          <Route exact path="/series" component={Series} />
          <Route exact path="/news" component={News} />
          <Route exact path="/ranking" component={Ranking} />
          <Route exact path="/polls" component={Polls} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
