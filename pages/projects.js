import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowLeft,

} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className='text-center'>
            <a href="https://kach0w.com">
                <div className='text-[3rem] hover:text-[#3b82f6] mt-[10vh] '>
                    <FontAwesomeIcon 
                    icon={faArrowLeft} /> 
                </div>
            </a> 
            <div className='justify-center align-middle text-center '>
                <div className='text-[4rem] font-bold'>
                    Projects
                </div>
                <ul className='text-[3rem]  [&>*] '>
                    <li><a className = "hover:text-[#3b82f6]" href="https://github.com/kach0w/Youtube-Playlist-Maker">Youtube Playlist Maker</a></li>
                    <li><a className = "hover:text-[#3b82f6]" href="https://pokedex.kachow.me">Pokédex</a></li>
                    <li><a className = "hover:text-[#3b82f6]" href="https://github.com/kach0w/GimickyMessenger">Gimicky Messenger</a></li>
                    <li><a className = "hover:text-[#3b82f6]" href="https://kachow.me/Weather/weather">Weather Forecast</a></li>
                    <li><a className = "hover:text-[#3b82f6]" href="/Calculator/calculator">Apple Calculator</a></li>
                    <li><a className = "hover:text-[#3b82f6]" href="https://scores.kachow.me">NBA Live Scores</a></li>
                    <li><a className = "hover:text-[#3b82f6]" href="https://stats.kachow.me">NBA Player Stats</a></li>
                    <li className='text-[1rem] mt-[5vh]'><p>Note: these may not be up to date, check my <a href="https://github.com/kach0w">GitHub</a> for the most up to date</p></li>
                </ul>
            </div>  
            
        </div>



  )
}
