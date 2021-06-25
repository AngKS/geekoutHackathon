import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/pages/Home'
import Community from './components/pages/Community'
import Resources from './components/pages/Resources'
import Profile from './components/pages/Profile'
import ArticlePage from './components/pages/ArticlePage';
import GetStarted from './components/pages/GetStarted';
import Tutorials from './components/pages/Tutorials';
import Cheatsheet from './components/pages/Cheatsheet';

function App() {


  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/community" exact component={Community} />
          <Route path="/resources" exact component={Resources} />
          <Route path="/articlePage" exact component={ArticlePage} />
          <Route path="/getStarted" exact component={GetStarted} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/tutorials" exact component={Tutorials} />
          <Route path="/cheatsheet" exact component={Cheatsheet}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
