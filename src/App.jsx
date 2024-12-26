import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ReposList from './components/ReposList'
import RepoDetails from './components/RepoDetails'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ReposList />} />
          <Route path=':repoId' element={<RepoDetails />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
