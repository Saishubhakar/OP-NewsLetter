import './App.css';
import React, { useState } from 'react'
import Navbar from './addfactors/Navbar';
import News from './addfactors/News';
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom"

const App  = ()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const pageSize = 6;

  const [progress, setProgress] = useState(0)


    return (
      <div>
        <Router>
          <LoadingBar
          height={2.5}
            color='#f11946'
            progress={progress}
          />
          <Navbar />
          <Switch>
            <Route exact path="/"><News apiKey = {apiKey} setProgress = {setProgress} key="general" pageSize={pageSize} country="in" category="general" /></Route>
            <Route exact path="/business"><News apiKey = {apiKey} setProgress = {setProgress} key="business" pageSize={pageSize} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News apiKey = {apiKey} setProgress = {setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
            <Route exact path="/science"><News apiKey = {apiKey} setProgress = {setProgress} key="science" ppageSize={pageSize} country="in" category="science" /></Route>
            <Route exact path="/sports"><News apiKey = {apiKey} setProgress = {setProgress} key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News apiKey = {apiKey} setProgress = {setProgress} key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }

export default App