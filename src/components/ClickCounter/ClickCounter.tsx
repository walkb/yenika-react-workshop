"use client"

import { useState } from "react";

export default function ClickCounter() {
    // Part 2.1 -- Replace clicks with a state variable here
    const clicks = 0;

    // Part 2.3a -- Write handler(s) for the button to adjust state!


    // Part 2.5 -- Add this style to the button conditionally
    const disabledStyle = {
        pointerEvents: "none",
        backgroundColor: "#4b5563",
    }

    // Part 2.2 -- Replace the number of clicks with our state
    return (
        <div className="flex flex-col gap-2 items-center">
            <h3>Number of clicks: 0</h3>
            <div className="flex flex-row gap-2">
                {/* Part 2.3b -- Add the function to the onClick handler for the button */}
                <button className="w-8 h-8 bg-gray-500 rounded-full hover:bg-gray-600 active:bg-gray-700">-</button>
                <button className="w-8 h-8 bg-gray-500 rounded-full hover:bg-gray-600 active:bg-gray-700">+</button>
            </div>
            {/* Part 2.4 -- Conditionally render something based on the number of clicks! */}
        </div>
    )
}