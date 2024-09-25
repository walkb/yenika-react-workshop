"use client"
import getData from "../../helper/connect";
import { useEffect, useState } from "react";
import styles from "./Profile.module.css"

export default function Profile({name} : {name : string}) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({name: 'User', team: 'Team'})

    useEffect(() => {
        // Part 3.1 -- add a "fetch" call using getData function
    }, [])

    if (loading) {
        return (
            <div className="w-96 h-32 rounded bg-gray-200">
                <div className="animate-pulse w-full h-full flex flex-col gap-4 m-2 mt-4">
                    <div className="w-48 h-6 rounded-full bg-gray-400"></div>
                    <div className="w-32 h-2 rounded-full bg-gray-400"></div>
                </div>

            </div>
        )
    } else {
        return (
            <div className="w-96 h-32 rounded bg-gray-200">
                <div className={"w-full h-full flex flex-col m-2 " + styles.fade}>
                    <h2 className="text-3xl">Hello!</h2>
                    <p></p>
                </div>
            </div>
        )
    }
}