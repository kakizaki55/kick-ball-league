import './App.css';
import './views/TeamList/TeamsList';
import TeamsList from './views/TeamList/TeamsList';
import PlayerList from './views/PlayerList/PlayerList';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import client from './services/client';

function App() {
  return (
    <div className="App">
      <h1 className="title">kick ball</h1>
      <BrowserRouter>
        <header className="header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/teams">Teams</NavLink>
          <NavLink to="/players">Players</NavLink>
        </header>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <h1>Kick Ball League Home Page</h1>
            </Route>
            <Route path="/teams" component={TeamsList} />
            <Route path="/teams/:id" component={PlayerList} />
            <Route path="/players" component={PlayerList} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
0;
