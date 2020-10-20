import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import api from './utils/api';
import './styles/bootstrap.min.css';
import './styles/styles.css'


const getRoutes = [
  '/users/fetch',
  '/messages/fetch',
  '/chatrooms/fetch',
]
const postRoutes = [
  '/users/new',
  '/users/login',
  '/users/logout',
  '/users/delete',
  '/chatrooms/create',
  '/chatrooms/delete',
]
const patchRoutes = [
  '/users/update',
]


const App = () => {
  getRoutes.forEach(route => {
    console.log(route)
    api.get(route).then(res => console.log(res.data))
  });
  postRoutes.forEach(route => {
    console.log(route)
    api.post(route).then(res => console.log(res.data));
  });
  patchRoutes.forEach(route => {
    console.log(route)
    api.patch(route).then(res => console.log(res.data))
  });
  return (
    <div className='wrapper d-flex align-items-stretch'>
      <Sidebar />
    </div>
  )
}

export default App;
