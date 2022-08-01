import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components'
import { routesConfig } from './routes/routesConfig'

function App() {
  const location = useLocation()

  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          {
            routesConfig.map(({ id, element, path, index }) => (
              <Route 
                index={index} 
                key={id} 
                path={path}
                element={element} 
              />
            ))
          }
        </Route>
    </Routes>
    </div>
  );
}

export default App;
