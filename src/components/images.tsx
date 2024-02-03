import * as React from "react"
import Image from "next/image";


export function MainImages() {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center mb-14 mt-10">
        < Image
                className= "relative drop-shadow-[0_0_0.5rem_#00000070] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-full md:w-1/3 px-4 py-2"
            src = "/logo-site.svg"
            alt = "Logo"
            width = { 300} // This will be the maximum width
            height = { 100} // This will be the maximum height
            priority
        />

        < Image
            className= "relative dark:invert w-full md:w-2/3 px-4 py-2"
            src = "/title-site.svg"
            alt = "Title"
            width = { 600} // This will be the maximum width
            height = { 100} // This will be the maximum height
            priority
        />
        </div>
    )
}
