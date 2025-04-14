import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsList from './components/NewsList';

function App() {
  return (
    <Router>
      <div>
        <h1>News App</h1>
        <Switch>
          <Route path="/" exact component={NewsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;