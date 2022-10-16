import React from "react";
import { Link } from "react-router-dom";
import "../card/card.css";

function Card() {
    return(
        
        <div class="wrapper">
            <div class="card">
                <h3 class="card-title">Subject 1</h3>
                <p class="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <Link to="/subject">
                    <button class="card-btn">Click here</button>
                </Link>
            </div>
            <div class="card">
                <h3 class="card-title">Subject 2</h3>
                <p class="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <button class="card-btn">Click here</button>
            </div>
            <div class="card">
                <h3 class="card-title">Subject 3</h3>
                <p class="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                <button class="card-btn">Click here</button>
            </div>
        </div>
    )
}

export default Card;