import React, { useState, useEffect } from 'react'
import PagMain from './Pages/paginaMain/PaginaMain'
import Detalhes from './Pages/detalhes/Detalhes'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { apiFones } from './api/api'

function App() {

  const [fones, setFones] = useState([])

  const handleFones = () => {
    apiFones().then(response => {
      setFones(response)
    })
  }

  useEffect(() => {
    handleFones()
  }, [])

  console.log(fones)

  return (
    <Router>
      <Routes>
        <Route 
          path = '/' 
          exact 
          element = {
            <PagMain 
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
