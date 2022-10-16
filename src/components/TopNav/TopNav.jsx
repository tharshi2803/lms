import React from "react";
import "../TopNav/TopNav.css"

function TopNav() {
    return (
        <div class="nav">
            {/* <input type="checkbox" id="nav-check"> */}
            <div class="nav-header">
                <div class="nav-title">
                    LMS
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">
                <a href="#" target="_blank">Dashboard</a>
                <a href="#" target="_blank">Courses</a>
                <a href="#" target="_blank">Grades</a>
                <a href="#" target="_blank">Calender</a>               
            </div>
            <div className="nav-icons">
                <i class="fas fa-bell fa-lg fas-icon"></i>
                <i class="fas fa-user fa-lg fas-icon"></i>     
            </div>
        </div>
    );
}
export default TopNav;