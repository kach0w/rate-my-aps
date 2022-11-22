import React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronDown,

} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className='justify-center content-center text-center m-x-auto'>
        <div className='z-0 flex text-[1.5rem] pt-5 space-x-20 h-15 bg-grey text-center justify-center content-center align-middle z-3 font-serif '> 
            <a href="https://kach0w.com">Home</a>
            {/* <Link href="#About">
              About 
            </Link> */}
            <a href="#about">About</a>
            <Link href="#Projects">
              Projects
            </Link>  
            {/* <div className='group justify-center'>
                  Projects <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ fontSize: 19, color: "black" }}
                />
                <div >
                    <ul className='hidden bg-[#3b82f6] z-50 rounded p-3 right-x-px text-[white] text-[1rem]  group-hover:block absolute'>
                        <li><a href="https://github.com/kach0w/Youtube-Playlist-Maker">Youtube Playlist Maker</a></li>
                        <li><a href="https://pokedex.kachow.me">Pokédex</a></li>
                        <li><a href="https://github.com/kach0w/GimickyMessenger">Gimicky Messenger</a></li>
                        <li><a href="https://kachow.me/Weather/weather">Weather Forecast</a></li>
                        <li><a href="/Calculator/calculator">Apple Calculator</a></li>
                        <li><a href="https://scores.kachow.me">NBA Live Scores</a></li>
                        <li><a href="https://stats.kachow.me">NBA Player Stats</a></li>
                    </ul>
                </div>  
            </div> */}
            <a href="https://kach0w.com/#blog">Blog</a>

        </div>
    </div>
  )
}

export default Navbar