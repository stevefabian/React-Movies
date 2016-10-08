import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadMovies } from './actions/movieActions';

import App from './components/App';
import SearchPage from './components/Search/SearchPage';
import FavoritesPage from './components/Favorites/FavoritesPage';
import AboutPage from './components/About/AboutPage';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

import './index.css';

const store = configureStore();
store.dispatch(loadMovies());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={FavoritesPage} />
        <Route path="search" component={SearchPage} />
        <Route path="favorites" component={FavoritesPage} />
        <Route path="about" component={AboutPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
