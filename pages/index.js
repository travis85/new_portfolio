import React, { useState }from 'react'
import Styles from '../styles/Intro.module.css'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import ReactPlayer from "react-player"
import Image from 'next/image'
// import videoBg from "../public/assets/videoBg.mp4"

export default function Intro() {

  return (
    <>
    <div className={Styles.container}>
       
        

      <div className={Styles.introduction}>
        <h1>Hi, I'm Travis!</h1>
        <p>
          If your looking for a scrappy true self starter <br></br>
          that wakes up daily with a carpe diem type attitude<br></br>
          lets speak further!
        </p>
        <div id={Styles.icons}>
          <Link href="/emailForm" >
            <AiOutlineMail size="25px" color='rgb(10,102,194)' id={Styles.linkeInIcon}/>
          </Link>
          <Link href="https://www.linkedin.com/in/travis-flake-98a734147/" >
            <BsLinkedin size="25px" color='rgb(10,102,194)' id={Styles.linkeInIcon}/>
          </Link>
          <Link href="https://github.com/travis85" >
            <FaGithub size="25px" id={Styles.githubIcon} />
          </Link>
          
        </div>
      </div>
       
      <div className={Styles.imageDiv}>
          <Image src='/../public/assets/profilePic.png' alt="Picture of the author" width={250} height={300}  />
      </div>
    
      
        
    </div>
    </>
    
    
  )
}
