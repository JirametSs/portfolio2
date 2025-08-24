import React from "react";


const Shapes = () => {
    return (
        <div class="background-shapes">
    
    <svg class="shape" width="20" height="20">
        <rect x="0" y="0" width="20" height="20" stroke="black" fill="transparent" stroke-width="2"/>
    </svg>

    
    <svg class="shape" width="20" height="20">
        <circle cx="10" cy="10" r="8" stroke="red" fill="transparent" stroke-width="2"/>
    </svg>

    
    <svg class="shape" width="20" height="20">
        <polygon points="10,0 20,20 0,20" stroke="green" fill="transparent" stroke-width="2"/>
    </svg>

    
    <svg class="shape" width="30" height="15">
        <rect x="0" y="0" width="30" height="15" stroke="blue" fill="transparent" stroke-width="2" transform="rotate(25)"/>
    </svg>

    
    <svg class="shape" width="30" height="20">
        <path d="M0,10 Q5,0 10,10 T20,10" stroke="purple" fill="transparent" stroke-width="2"/>
    </svg>

    
    <svg class="shape" width="30" height="30">
        <line x1="0" y1="0" x2="30" y2="30" stroke="orange" stroke-width="2"/>
    </svg>

    
    <svg class="shape" width="30" height="30">
        <polyline points="0,10 5,0 10,10 15,0 20,10 25,0 30,10" stroke="cyan" fill="transparent" stroke-width="2"/>
    </svg>

    
    <svg class="shape" width="25" height="15">
        <ellipse cx="12" cy="7" rx="10" ry="5" stroke="pink" fill="transparent" stroke-width="2"/>
    </svg>

    
    <svg class="shape" width="30" height="20">
        <path d="M0,20 A15,15 0 0,1 30,20" stroke="gold" fill="transparent" stroke-width="2"/>
    </svg>
</div>


    )
}

export default Shapes;