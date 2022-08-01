import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Styles from '../styles/Header.module.css'


export default function Header() {
  return (
    <>
    <div className={Styles.container}>
      
      <div className={Styles.links}>
        
          <ul className="breadcrumb">
            <Link href="https://github.com/travis85">
              <li className="breadcrumb-item"><a href="#">HOME</a></li>
            </Link>
            <Link href="https://github.com/travis85">
              <li className="breadcrumb-item"><a href="#">SKILLS</a></li>
            </Link>
            <Link href="https://github.com/travis85">
              <li className="breadcrumb-item"><a href="#">FEATURED PROJECTS</a></li>
            </Link>
            
          
          
        </ul>
        
      </div>
      
    </div>
    </>
    
  )
}
