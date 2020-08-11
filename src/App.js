import React from 'react';
import './App.scss'
import Menu from './components/menu.js';
import List from './components/complicated_list.js';
import Sidebar from './components/sidebar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="container app-content">
          <div className="row">
              <div className="col-12">
                <Menu />
              </div>
          </div>
          <div className="main">
            <div className="main__general-content">
              <List />
            </div>
            <div className="main__sidebar-content">
              <Sidebar />
            </div>
          </div>
      </div>
    </div>
  )
}

export default App;
