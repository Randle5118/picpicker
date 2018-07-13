import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MyPicsPage from './components/myPicsPage'

import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(logger)
    )
)

ReactDOM.render(
<Provider store={ store }>
    <Router>
        <div className="ui container">
            <div className="ui three item menu">
                <NavLink exact activeClassName="active" className="item" to="/">HOME</NavLink>
                <NavLink activeClassName="active" className="item" to="/myPics">MyPics</NavLink>
                <NavLink activeClassName="active" className="item" to="/myPics/new">Add New Pic</NavLink>
            </div>
            <Route exact path='/' component={ App }/>
            <Route exact path='/myPics' component={ MyPicsPage }/>
            <Route exact path='/myPics/new' component={ App }/>
        </div>
    </Router>
</Provider>


, document.getElementById('root'));
registerServiceWorker();
