import './css/App.css'
import Form from './components/form'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import List from './components/list'

const App = () => {
  return (
    <div>
      <nav className="nav-bar" data-testid="nav-bar-test-id">
        <Link to="/">Home</Link>
        <Link to="/add-box">Create a new box</Link>
        <Link to="/list-boxes">Check all boxes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-box" element={<Form />} />
        <Route path="/list-boxes" element={<List />} />
      </Routes>
    </div>
  )
}

export default App
