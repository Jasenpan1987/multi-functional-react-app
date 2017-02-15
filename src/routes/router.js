import React, { Component } from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { Provider } from 'react-redux';

import App from "../components/App";
import Todos from "../components/TodoApp";
import Youtube from "../components/YoutubeApp";

import Examples from "../components/Examples";
import Counter from "../components/Examples/Counter";
import Sum from "../components/Examples/Sum";
import Imgur from "../components/Examples/Imgur";

import store from "../redux/store";

const history = syncHistoryWithStore(browserHistory, store)

export default class RoutedApp extends Component {
    render(){
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Youtube}/>
                        <Route path="youtube" component={Youtube}/>
                        <Route path="todos" component={Todos}/>
                        
                        <Route path="examples" component={Examples}>
                            <IndexRoute component={Counter} />
                            <Route path="counter" component={Counter}/>
                            <Route path="sum" component={Sum}/>
                            <Route path="imgur" component={Imgur}/>
                        </Route>
                    </Route>
                </Router>
            </Provider>
        )
    }
}