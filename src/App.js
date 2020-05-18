import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail/Detail'
import Grid from './Grid/Grid'


import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route path='/' exact component={Home} />
         
          <Route path='/grid' exact component={Grid} />
          <Route path='/detail/:id' from component={Detail} />
         
        </Switch>
      </div>
    )
  }
}
