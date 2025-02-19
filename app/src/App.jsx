import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.css';

function App() {
  console.log('App component rendered');
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;