import './App.css';
import './views/TeamList/TeamsList';
import TeamsList from './views/TeamList/TeamsList';
import PlayerList from './views/PlayerList/PlayerList';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <div className="App">
      <p>kick ball</p>
      <BrowserRouter>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/players">Players</NavLink>
        <Switch>
          <Route exact path="/">
            <h1>Kick Ball Leage HOme Page</h1>
          </Route>
          <Route path="/players" component={TeamsList} />
          <Route path="/player">
            <PlayerList></PlayerList>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
0;
