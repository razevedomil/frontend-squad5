import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Banner from './assets/components/Banner/Banner'
import Navbar from './assets/components/Navbar/Navbar'
import Home from './pages/Home'

  function app () {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      <Navbar />
      <Banner />
      

      </Switch>
      </Router>
    </div>
  )
  }

export default app
