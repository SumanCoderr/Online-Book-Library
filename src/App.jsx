import './App.css'
import { Outlet } from 'react-router-dom';
import {Provider}  from 'react-redux';
import appStore from './utilis/appStore';
import Navbar from './Components/Navbar';

function App() {
  return (
  <Provider store={appStore}>
    <Navbar/>
    <Outlet/>
  </Provider>
  )
}

export default App;