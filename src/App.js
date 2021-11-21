import React, { useState, useEffect } from 'react'
import PagMain from './Pages/paginaMain/PaginaMain'
import Detalhes from './Pages/detalhes/Detalhes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { apiFones } from './api/api'

function App() {

  const [fones, setFones] = useState([])

  const handleFones = () => {
    apiFones().then(response => {
      setFones(response.data)
    })
  }

  console.log(fones)

  useEffect(() => {
    handleFones()
  }, [])

  return (
    <Router>
      <Routes>
        <Route 
          path = '/' 
          exact 
          element = {
            <PagMain 
              fones = {fones}
            />
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
