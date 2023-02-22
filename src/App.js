import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <nav class="navbar navbar-expand-sm bg-light navbar-dark  bg-dark">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src="\logo.svg" style={{width:'40px'}}  alt="Avatar Logo"  className="rounded-pill"/>
        </a>
    </div>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li>
      </ul>
    </nav>
  );
} 

export default App;
