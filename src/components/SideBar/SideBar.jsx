import React from "react";
import "../SideBar/SideBar.css"

function SideBar() {
    return (
        <div>
            <div class="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>

            <div class="main">
                <h2>Sidebar</h2>

            </div>
        </div>
    );
}

export default SideBar;