import React from 'react';
import './App.css';
import Menu from './components/menu.js';
import List from './components/complicated_list.js';
import Sidebar from './components/sidebar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="container">
          <div className="row">
              <div className="col-12">
                <Menu />
              </div>
          </div>
      </div>
      <List />
      <Sidebar />
    </div>
  )
}

export default App;
