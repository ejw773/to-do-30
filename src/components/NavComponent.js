import React from 'react';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">To Do 30</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://todo30.com/" target="_blank">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/ejw773/to-do-30" target="_blank">GitHub</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;