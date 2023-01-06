import React from 'react'
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="36"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto">
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'dashboard'}> DashBoard</Link>
        </li>
      <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'register'}> Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'login'}>Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default MainNav