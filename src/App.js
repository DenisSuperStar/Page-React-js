import React from 'react';
import './App.css';
import Menu from './components/menu.js'
import List from './components/complicated_list.js'
import Sidebar from './components/sidebar.js'

function App() {
  return (
    <div>
      <Menu />
      <List />
      <Sidebar />
    </div>
  )
}

export default App;
