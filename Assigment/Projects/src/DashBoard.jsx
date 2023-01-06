import React from 'react'
import { Link, Outlet } from "react-router-dom";
const DashBoard = () => {
    return (
        <div>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="nav-item">
                                    <Link to={'personal'} class="nav-link align-middle px-0">
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Personal</span>
                                    </Link>
                                    <Link to={'education'} class="nav-link align-middle px-0">
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Education</span>
                                    </Link>
                                    <Link to={'experiance'} class="nav-link align-middle px-0">
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Experiance</span>
                                    </Link>
                                    <Link to={'skills'} class="nav-link align-middle px-0">
                                        <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline">Skills</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-9 ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard