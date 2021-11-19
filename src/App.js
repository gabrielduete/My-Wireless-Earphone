import PagMain from './Pages/paginaMain/PaginaMain'
import Detalhes from './Pages/detalhes/Detalhes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path = '/' 
          exact 
          element = {
            <PagMain />
          }
      />

          <Route
            path = '/'
            exact
            element = {
              <Detalhes />
            }          
          />
      </Routes>
    </Router>
  )
}

export default App
