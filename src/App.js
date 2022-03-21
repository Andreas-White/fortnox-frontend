import './css/App.css'
import Form from './components/form'
import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import List from './components/list'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="nav-bar" data-testid="nav-bar-test-id">
          <Link to="/">Home</Link>
          <Link to="/addbox">Create a new box</Link>
          <Link to="/listboxes">Check all boxes</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addbox" element={<Form />} />
          <Route path="/listboxes" element={<List />} />
        </Routes>
      </div>
    )
  }
}
export default App
