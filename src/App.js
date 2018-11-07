import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ListProjects from './ListProjects';
import Details from './Details'

const App = () => {
  const onHandleOpen = (history, user, id, name) => {
    if(id && user){
      history.push(`/${user}/project/${id}/${name}`);
    }
  }

  const onHandleBack = (history, username) => {
    if(username){
      history.push(`/${username}/projects`);
    }
    else
      history.push("/");
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route 
          exact path='/' 
          render={({ history }) => (
            <Search
              onSubmitUsername={(username) => {
                history.push(`/${username}/projects`)
              }}
            />
        )} />
        <Route 
          exact path="/:username/projects" 
          render={({ history, match }) => (
          <ListProjects
            match = {match}
            history = {history}
            onHandleBack = {onHandleBack}
            onHandleOpen = {onHandleOpen}
          />
        )}/>
        <Route exact path="/:username/project/:id/:name" render={({history, match}) => (
          <Details
            match = {match}
            history = {history}
            onHandleBack = {onHandleBack}
          />
        )}/>
      </Switch>
    </BrowserRouter>
  );
};


ReactDOM.render(<App />, document.getElementById('root'));