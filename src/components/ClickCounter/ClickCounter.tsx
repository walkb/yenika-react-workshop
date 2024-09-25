"use client"

import { useState } from "react";

export default function ClickCounter() {
    // Declare state variables here
    const [clicks, setClicks] = useState(0);

    function addClick() {
        setClicks(clicks + 1);
    }

    const disabledStyle = {
        pointerEvents: "none",
        backgroundColor: "#4b5563",
    }

    const style = {
        
    }

    return (
        <div className="flex flex-col gap-2 items-center">
            {/* Add a way to see the state here! */}
            <h3>Number of clicks: {clicks}</h3>
            <div className="flex flex-row gap-2">


                {/* One way to add a handler */}
                <button style={clicks >= 5 ? disabledStyle : style} onClick={addClick} 
                className="w-8 h-8 bg-gray-500 rounded-full hover:bg-gray-600 active:bg-gray-700">+</button>

                {/* Another way to add a handler */}
                <button onClick={() => {
                    setClicks(clicks - 1);
                }} 
                className="w-8 h-8 bg-gray-500 rounded-full hover:bg-gray-600 active:bg-gray-700">-</button>

            </div>
            {/* Conditional rendering */}
            { clicks >= 5 && <p>You clicked a lot. Stop.</p>}
        </div>
    )
}