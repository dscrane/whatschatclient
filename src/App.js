import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Landing from './pages/Landing';
import './styles/bootstrap.min.css';
import './styles/styles.css'


const App = () => {

  return (
    <div className='wrapper d-flex align-items-stretch'>
      <Sidebar />
      <Landing />
    </div>
  )
}

export default App;




