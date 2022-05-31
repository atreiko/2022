import React from 'react';
import './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../../components';
import routesConfig from '../../routes/routesConfig';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}> 

          {
            routesConfig.map(({ index, element, id, path }) => (
              <Route 
                index={index} 
                element={element} 
                key={id} 
                path={path}
              />
            ))
          }
        
        </Route>
      </Routes>
    </div>
  );
}

export default App;
