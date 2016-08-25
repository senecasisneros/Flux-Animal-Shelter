import React from 'react';
import { render } from 'react-dom';
import './css/style.css'
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';

import App from './components/App'
import Welcome from './components/Welcome'
import Animal from './components/Animal'
import Owners from './components/Owners'
import AnimalDisplay from './components/AnimalDisplay'
import AddAnimal from './components/AddAnimal'

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="AnimalDisplay" component={AnimalDisplay} />
      <Route path="Owners" component={Owners} />
      <Route path="AddAnimal" component={AddAnimal} />
    </Route>
  </Router>,
  document.getElementById('root')
)











//
// render(
//   <App/>,
//   document.getElementById('root')
// );


// render(
//   <Router history={browserHistory}>
//     <Route path="/" component={MainPage}></Route>
      // <IndexRoute component={MainPage}/>
//       <Route path="app" component={App} />
//   </Router>,
//  document.getElementById('root')
// );
